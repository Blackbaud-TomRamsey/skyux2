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

function getVisualWebpackConfig(testName) {

  var plugins = [];
  var config;
  var entry = {};
  entry[testName] =
    helpers
    .root('src/modules/' + testName + '/fixtures/' + testName + '.component.visual-fixture.ts');
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

  var visualModule
    = 'src/modules/' + testName + '/fixtures/' + testName + '.component.visual-fixture';

  plugins.push(
    new ngtools.AotPlugin({
      tsConfigPath: helpers.root('tsconfig-aot.json'),
      entryModule:
      helpers
      .root(visualModule) + '#AppModule'
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
    entry: entry,

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
