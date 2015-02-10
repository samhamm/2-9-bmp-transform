'use strict';

var removeGreen = exports = module.exports = {}; // jshint ignore:line
var metadata = require('./metadata.js');
var fs = require('fs');

var HEADER_SIZE = 54;

removeGreen.image = function(bufferGreen){
  for (var i = HEADER_SIZE; i < HEADER_SIZE + metadata.paletteSize; i += 4) {
      bufferGreen[i + 1] = 0;
  }
  fs.writeFile('output-removeGreen.bmp', bufferGreen);
  console.log("Green has been removed from the image!");
};
