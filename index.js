// Bitmap Transformer
// Code Fellows JavaScript Development Accelerator
// Due 2-9-15
// ---------------------------
// Gaye Bulut
// Tricia Buckenberger
// Sam Hamm
// ---------------------------

'use strict';

var fs = require('fs');
var bitmap = fs.readFileSync('img/test.bmp');
var bitmapObject = {};
var HEADER_SIZE = 54;
var buf = new Buffer(bitmap);

bitmapObject.type = bitmap.toString('utf-8', 0, 2); // reads type
bitmapObject.size = bitmap.readUInt32LE(2); // reads size
bitmapObject.startOfPixels = bitmap.readUInt32LE(10);
bitmapObject.width = bitmap.readUInt32LE(18);
bitmapObject.height = bitmap.readUInt32LE(22);
bitmapObject.paletteSize = bitmap.readUInt32LE(46);
bitmapObject.colorDepth = bitmap.readUInt16LE(28);

for (var i = HEADER_SIZE; i < HEADER_SIZE + bitmapObject.paletteSize; i++) {
      buf[i] = 255 - buf[i];
}

console.dir(bitmapObject);

fs.writeFile('output.bmp', buf);
