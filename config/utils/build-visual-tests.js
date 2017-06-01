var helpers = require('../utils/helpers');
var glob = require('glob');
var path = require('path');
var webpackvisualbuild = require('../webpack/webpack.visual-build-aot');
var webpack = require('webpack');
var plugins = [];
var entry = {};

(function () {
  var files = glob.sync('./src/modules/**/fixtures/alert.component.visual-fixture.ts');
  var totalFiles = files.length;
  var currentCount = 0;
  files.forEach(function (file) {
    var demoName;
    var dirname;
    var parts;
    var visualConfig;
    var compiler;

    dirname = path.dirname(file);
    parts = dirname.split('/'); // glob always returns '/' as separator
    demoName = parts[parts.length - 2];

    visualConfig = webpackvisualbuild.getVisualWebpackConfig(demoName, file);
    console.log('before log compiler ', demoName);
    compiler = webpack(visualConfig);
    console.log('after log compiler ', demoName);

    compiler.run(function (err, stats) {
      console.log('in compiler for', demoName);
      var jsonStats;
      if (err) {
        console.log(err);
        // reject(err);
        return;
      }

      jsonStats = stats.toJson();

      if (jsonStats.errors.length) {
        console.log(jsonStats.errors);
      }

      if (jsonStats.warnings.length) {
        console.log(jsonStats.warnings);
      }

      console.log(stats.toString({
        chunks: false,
        colors: false
      }));
      currentCount++;
      console.log('compiling ' + demoName + ' complete');
      console.log('completed file ' + currentCount + ' out of ' + totalFiles);
      if (currentCount === totalFiles) {
        // resolve(stats);
      }

    });
  });

})();
