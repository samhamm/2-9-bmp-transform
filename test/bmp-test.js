'use strict';

var expect = require('chai').expect;
var metadata = require('../lib/metadata.js');

var filename = 'img/test2.bmp';
var fs = require('fs');
var input = fs.readFileSync(filename);

metadata.listing(input);
console.log(metadata.type);

describe('metadata', function() {

  it('should read file type', function() {
    expect(metadata.type).to.eql('BM');
  });

  it('should read file size', function() {
    expect(metadata.size).to.eql(11078);
  });

  it('should read start of pixels in the file', function() {
    expect(metadata.startOfPixels).to.eql(1078);
  });

    it('should read image height', function() {
    expect(metadata.height).to.eql(100);
  });

  it('should read image width', function() {
    expect(metadata.width).to.eql(100);
  });

  it('should read color depth', function() {
    expect(metadata.colorDepth).to.eql(8);
  });

});
