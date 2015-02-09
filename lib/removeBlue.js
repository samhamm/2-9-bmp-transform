'use strict';

var removeBlue = exports = module.exports = {}; // jshint ignore:line
var metadata = require('./metadata.js');
var fs = require('fs');

var HEADER_SIZE = 54;

removeBlue.image = function(buffer){
  for (var i = HEADER_SIZE; i < HEADER_SIZE + metadata.paletteSize; i += 4) {
      buffer[i] = 0;
  }
  fs.writeFile('output-removeBlue.bmp', buffer);
  console.log("Blue has been removed from the image!");
};
