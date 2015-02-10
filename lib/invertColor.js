'use strict';

var invertColor = exports = module.exports = {}; // jshint ignore:line
var metadata = require('./metadata.js');
var fs = require('fs');

var HEADER_SIZE = 54;

invertColor.image = function(bufferInv){

  for (var i = HEADER_SIZE; i < HEADER_SIZE + metadata.paletteSize; i++) {
      bufferInv[i] = 255 - bufferInv[i];
  }
  fs.writeFile('output-invertColor.bmp', bufferInv);
  console.log("Image color successfully inverted!");
};
