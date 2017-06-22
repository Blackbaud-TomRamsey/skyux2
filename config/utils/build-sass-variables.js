var yamlParse = require('js-yaml');
var path = require('path');
var fs = require('fs-extra');

function parseSassObject(sassObject, prefix) {
  for (var key in sassObject) {
    if (sassObject.hasOwnProperty(key)) {
      var nestedName = prefix + '-' + key;
      if (sassObject[key] !== null && typeof sassObject[key] === 'object') {
        parseSassObject(sassObject[key], nestedName);
      } else {
        scssResult += nestedName + ': ' + sassObject[key] + ' !default;\n';
      }
    }
  }
}

var outFileLocation = process.argv[2];

if (!outFileLocation) {
  throw new Error('File location must be specified.');
}

var sassJson
  = yamlParse.safeLoad(fs.readFileSync(path.resolve(__dirname, 'colortokens.yaml'), 'utf8'));

var prefix = '$sky';

var scssResult = '';

parseSassObject(sassJson, prefix);

fs.writeFileSync(outFileLocation, scssResult);

