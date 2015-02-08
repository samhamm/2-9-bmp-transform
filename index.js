// Bitmap Transformer
// Code Fellows JavaScript Development Accelerator
// Due 2-9-15
// ---------------------------
// Sam Hamm
// in partnership with
// Tricia Buckenberger & Gaye Bulut
// ---------------------------

'use strict';

var fs = require('fs');
var metadata = require('./lib/metadata.js');
var bitmap = require('./lib/bitmap.js');

var input = fs.readFileSync('img/test.bmp');
var output;

metadata.listing(input);
// bitmap.invert(input);
