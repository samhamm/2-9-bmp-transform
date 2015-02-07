// Bitmap Transformer
// Code Fellows JavaScript Development Accelerator
// Due 2-9-15
// ---------------------------
// Gaye Bulut
// Tricia Buckenberger
//  Sam Hamm
// ---------------------------

'use strict';

var fs = require('fs');
var bitmap = fs.readFileSync('toasty.bmp');

var bitmapObject = {};

bitmapObject.type = bitmap.toString('utf-8', 0, 2); // reads type
bitmapObject.size = bitmap.readUInt32LE(2); // reads size
bitmapObject.startOfPixels = bitmap.readUInt32LE(10);
bitmapObject.width = bitmap.readUInt32LE(18);
bitmapObject.height = bitmap.readUInt32LE(22);
bitmapObject.paletteSize = bitmap.readUInt32LE(46);
bitmapObject.colorDepth = bitmap.readUInt16LE(28);

console.dir(bitmapObject);

