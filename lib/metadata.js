'use strict';

var metadata = exports = module.exports = {};  // jshint ignore:line

metadata.listing = function(input) {

  var inputObject = {};
  inputObject.type = input.toString('utf-8', 0, 2); // reads type
  inputObject.size = input.readUInt32LE(2); // reads size
  inputObject.startOfPixels = input.readUInt32LE(10);
  inputObject.width = input.readUInt32LE(18);
  inputObject.height = input.readUInt32LE(22);
  inputObject.paletteSize = input.readUInt32LE(46);
  inputObject.colorDepth = input.readUInt16LE(28);

  console.dir(inputObject);
};
