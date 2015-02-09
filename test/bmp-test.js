'use strict';

var expect = require('chai').expect;
var metadata = require('../lib/metadata.js');

var filename = 'img/test2.bmp';
var fs = require('fs');
var input = fs.readFileSync(filename);

console.log(input.toString('utf-8', 0, 2));
console.log(input.readUInt32LE(2));

// describe('metadata', function(input) {

//   it('should read file size', function(input) {
//     expect(input.readUInt32LE(2)).to.eql(11078);
//   });

// });
