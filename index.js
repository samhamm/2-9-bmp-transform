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

metadata.listing(input); // this cannot be turned off or it all breaks

invertColor.image(input);
// removeRed.image(input);
// removeGreen.image(input);
removeBlue.image(input);

// TO DO
// -----
// * set up command line prompts for interface

// REMINDERS FOR HOW TO ACCESS THINGS
// ----------------------------------
// console.log("index.js says file type is " + metadata.type);
// Note: this needs metadata.listing(input) to happen first
