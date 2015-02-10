'use strict';

var metadata = exports = module.exports = {};  // jshint ignore:line

metadata.listing = function(input) {

  this.type = input.toString('utf-8', 0, 2); // reads type
  this.size = input.readUInt32LE(2); // reads size
  this.startOfPixels = input.readUInt32LE(10);
  this.width = input.readUInt32LE(18);
  this.height = input.readUInt32LE(22);
  this.paletteSize = input.readUInt32LE(46);
  this.colorDepth = input.readUInt16LE(28);

  // console.dir(this);
};
