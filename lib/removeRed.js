'use strict';

var removeRed = exports = module.exports = {}; // jshint ignore:line
var metadata = require('./metadata.js');
var fs = require('fs');

var HEADER_SIZE = 54;

removeRed.image = function(bufferRed){
  for (var i = HEADER_SIZE; i < HEADER_SIZE + metadata.paletteSize; i += 4) {
      bufferRed[i + 2] = 0;
  }
  fs.writeFile('output-removeRed.bmp', bufferRed);
  console.log("Red has been removed from the image!");
};
