// Bitmap Transformer
// Code Fellows JavaScript Development Accelerator
// Due 2-9-15
// ---------------------------
// Sam Hamm
// --------
// At the start of this assignment I was working with
// Tricia Buckenberger & Gaye Bulut
// ---------------------------

'use strict';

var fs = require('fs');
var input = fs.readFileSync('img/toasty.bmp');
var buffer = new Buffer(input);

var metadata = require('./lib/metadata.js');
var invertColor = require('./lib/invertColor.js');
var removeRed;
var removeGreen;
var removeBlue;
var removeAllColor;
var flipVertical;
var flipHorizontal;

metadata.listing(input);
invertColor.image(input);

// TO DO
// -----
// * write tests
// * set up command line prompts for interface

// REMINDERS FOR HOW TO ACCESS THINGS
// ----------------------------------
// console.log(metadata.type);
