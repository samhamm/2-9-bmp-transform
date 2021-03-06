// Bitmap Transformer
// Code Fellows JavaScript Development Accelerator
// Due 2-9-15
// --------
// Sam Hamm
// --------
// At the start of this assignment I was working with
// Tricia Buckenberger & Gaye Bulut.
// We continued to share thoughts here and there.

'use strict';

var filename = 'img/test2.bmp';

var fs = require('fs');
var input = fs.readFileSync(filename);
var buffer = new Buffer(input);

var bufferInv = new Buffer([]);

// buffer.copy(bufferInv);
var bufferRed = new Buffer([]);
// buffer.copy(bufferRed);
var bufferGreen = new Buffer([]);
// buffer.copy(bufferGreen);
var bufferBlue = new Buffer([]);
// buffer.copy(bufferBlue);

for (var i = 0; i < buffer.length; i++) {
  bufferInv[i] = buffer[i];
  bufferRed[i] = buffer[i];
  bufferGreen[i] = buffer[i];
  bufferBlue[i] = buffer[i];
};

var metadata = require('./lib/metadata.js'),
    invertColor = require('./lib/invertColor.js'),
    removeRed = require('./lib/removeRed.js'),
    removeGreen = require('./lib/removeGreen.js'),
    removeBlue = require('./lib/removeBlue.js');

metadata.listing(input);

// To do a particular transformation, un-comment the desired function
// invertColor.image(input);
// removeRed.image(input);
// removeGreen.image(input);
// removeBlue.image(input);
