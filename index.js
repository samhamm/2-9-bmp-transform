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

var metadata = require('./lib/metadata.js'),
    invertColor = require('./lib/invertColor.js'),
    removeRed = require('./lib/removeRed.js'),
    removeGreen = require('./lib/removeGreen.js'),
    removeBlue = require('./lib/removeBlue.js');

// metadata.listing(input);
// invertColor.image(input);
// removeRed.image(input);
// removeGreen.image(input);
removeBlue.image(input);

// RUBRIC
// ------
// Tests: 3pts
// Gruntfile/package.json 2pts
// Read Bitmap Meta Data 5pts
// Successfully Apply Transform 5pts
// Project Design 5pts

// TO DO
// -----
// * write tests
// * set up command line prompts for interface

// REMINDERS FOR HOW TO ACCESS THINGS
// ----------------------------------
// console.log(metadata.type);
