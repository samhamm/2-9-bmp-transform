'use strict';

var invertColor = exports = module.exports = {}; // jshint ignore:line
var metadata = require('./metadata.js');
var fs = require('fs');

var HEADER_SIZE = 54;

invertColor.image = function(buffer){
  for (var i = HEADER_SIZE; i < HEADER_SIZE + metadata.paletteSize; i++) {
      buffer[i] = 255 - buffer[i];
  }
  fs.writeFile('output.bmp', buffer);
  console.log("Image color successfully inverted!")
};
