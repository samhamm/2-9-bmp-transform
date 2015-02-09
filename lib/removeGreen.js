'use strict';

var removeGreen = exports = module.exports = {}; // jshint ignore:line
var metadata = require('./metadata.js');
var fs = require('fs');

var HEADER_SIZE = 54;

removeGreen.image = function(buffer){
  for (var i = HEADER_SIZE; i < HEADER_SIZE + metadata.paletteSize; i += 3) {
      buffer[i] = 0;
  }
  fs.writeFile('output-removeGreen.bmp', buffer);
  console.log("Green has been removed from the image!");
};
