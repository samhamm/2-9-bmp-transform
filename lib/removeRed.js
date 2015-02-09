'use strict';

var removeRed = exports = module.exports = {}; // jshint ignore:line
var metadata = require('./metadata.js');
var fs = require('fs');

var HEADER_SIZE = 54;

removeRed.image = function(buffer){
  for (var i = HEADER_SIZE; i < HEADER_SIZE + metadata.paletteSize; i += 4) {
      buffer[i + 2] = 0;
  }
  fs.writeFile('output-removeRed.bmp', buffer);
  console.log("Red has been removed from the image!");
};
