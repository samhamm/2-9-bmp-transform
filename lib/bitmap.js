'use strict';

var bitmap = exports = module.exports = {}; // jshint ignore:line

var HEADER_SIZE = 54;
var buffer = new Buffer(11078);

bitmap.invert = function(input){
  // for (var i = HEADER_SIZE; i < HEADER_SIZE + inputObject.paletteSize; i++) {
  //     buffer[i] = 255 - buffer[i];
  // }
  // fs.writeFile('output.bmp', buffer);
};
