'use strict';

var removeBlue = exports = module.exports = {}; // jshint ignore:line
var metadata = require('./metadata.js');
var fs = require('fs');

var HEADER_SIZE = 54;

removeBlue.image = function(bufferBlue){

  for (var i = HEADER_SIZE; i < HEADER_SIZE + metadata.paletteSize; i += 4) {
      bufferBlue[i] = 0;
  }
  fs.writeFile('output-removeBlue.bmp', bufferBlue);
  console.log("Blue has been removed from the image!");
};
