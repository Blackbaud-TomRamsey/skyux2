/**
 * @author: @AngularClass
 */

var helpers = require('../utils/helpers');
var webpackMerge = require('webpack-merge'); // used to merge webpack configs
var commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
var visualConfig = require('./webpack.demo-visual.js');
var fs = require('fs-extra');

var ngtools = require('@ngtools/webpack');

/**
 * Webpack Plugins
 */
var DefinePlugin = require('webpack/lib/DefinePlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Webpack Constants
 */
var ENV = process.env.ENV = process.env.NODE_ENV = 'development';
var HMR = helpers.hasProcessFlag('hot');
var METADATA = webpackMerge(commonConfig.metadata, {
  host: 'localhost',
  port: 3000,
  ENV: ENV,
  HMR: HMR
});

function writeTSConfig(testName, file) {
  var config = {
    'compilerOptions': {
      'target': 'es5',
      'module': 'es2015',
      'moduleResolution': 'node',
      'emitDecoratorMetadata': true,
      'experimentalDecorators': true,
      'sourceMap': true,
      'noEmitHelpers': true,
      'noImplicitAny': true,
      'rootDir': '.',
      'inlineSources': true,
      'declaration': true,
      'skipLibCheck': true,
      'lib': [
        'es2015',
        'dom'
      ],
      'types': [
        'jasmine',
        'node'
      ]
    },
    'baseUrl': './',
    'paths': {
      '@angular/common': ['../../../node_modules/@angular/common'],
      '@angular/compiler': ['../../../node_modules/@angular/compiler'],
      '@angular/core': ['../../../node_modules/@angular/core'],
      '@angular/forms': ['../../../node_modules/@angular/forms'],
      '@angular/platform-browser': ['../../../node_modules/@angular/platform-browser'],
      '@angular/platform-browser-dynamic': ['../../../node_modules/@angular/platform-browser-dynamic'],
      '@angular/router': ['../../../node_modules/@angular/router'],
      '@angular/http': ['../../../node_modules/@angular/http']
    },
    'exclude': [
      '../../../node_modules',
      '../../../dist',
      '../../../src/app'
    ],
    'compileOnSave': false,
    'buildOnSave': false,
    'angularCompilerOptions': {
      'debug': true,
      'genDir': './ngfactory',
      'skipMetadataEmit': true,
      'entryModule': file + '#AppModule'
    }
  };

  fs.ensureDirSync(helpers.root('/visual/tmp/' + testName));

  fs.writeJSONSync(helpers.root('/visual/tmp/' + testName + '/tsconfig.json'), config);

}

function getVisualWebpackConfig(testName, file) {

  writeTSConfig(testName, file);

  var plugins = [];
  var config;
  var entry = {};
  entry[testName] = file;
  plugins.push(new HtmlWebpackPlugin({
    template: 'visual/index.html',
    chunks: ['polyfills', 'vendor', testName],
    chunksSortMode: helpers.packageSort(['polyfills', 'vendor', testName]),
    filename: testName + '.html'
  }));

  plugins.push(
    new DefinePlugin({
      'ENV': JSON.stringify(METADATA.ENV),
      'HMR': METADATA.HMR,
      'process.env': {
        'ENV': JSON.stringify(METADATA.ENV),
        'NODE_ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR,
      }
    })
  );

  plugins.push(
    new ngtools.AotPlugin({
      tsConfigPath: helpers.root('visual/tmp/' + testName + '/tsconfig.json')
    })
  );

  config = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: '@ngtools/webpack'
        }
      ]
    },
    entry:
    helpers
      .root('src/modules/' + testName + '/fixtures/' + testName + '.component.visual-bootstrap.ts'),
    output: {

      /**
       * The output directory as absolute path (required).
       *
       * See: http://webpack.github.io/docs/configuration.html#output-path
       */
      path: helpers.root('visual/tmp/' + testName + '/'),

      /**
       * Specifies the name of each output file on disk.
       * IMPORTANT: You must not specify an absolute path here!
       *
       * See: http://webpack.github.io/docs/configuration.html#output-filename
       */
      filename: '[name].bundle.js',

      /**
       * The filename of the SourceMaps for the JavaScript files.
       * They are inside the output.path directory.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
       */
      sourceMapFilename: '[name].map',

      /** The filename of non-entry chunks as relative path
       * inside the output.path directory.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
       */
      chunkFilename: '[id].chunk.js'
    },

    plugins: plugins,

    /*
    * Include polyfills or mocks for various node stuff
    * Description: Node configuration
    *
    * See: https://webpack.github.io/docs/configuration.html#node
    */
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    },

    performance: {
      hints: false
    }

  });

  return config;
}

module.exports = {
  getVisualWebpackConfig: getVisualWebpackConfig
};
