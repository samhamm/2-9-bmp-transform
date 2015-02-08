# 2-9-bmp-transform
Code Fellow JavaScript Development Accelerator Assignment: Read an image file, transform it, and write it back to disk using Node.

For this assignment you will be building a Bitmap reader and transformer. It will read a Bitmap in from disk, run one or more color transforms on the bitmap and then write it out to a new file. This project will require the use of node buffers in order to manipulate binary data. Your project should include tests, as well as a Gruntfile and package.json file. Make sure to run all your code through jshint and jscs.

Your project should be able to take a transform as a callback that will be run once the bitmap file has been read into a buffer. Your project should include at least one transform. This is a difficult assignment so make sure to come to me with questions early. Ideas for easy transformations:

* invert the colors (essentially subtract every color value from the max color value which is 255),

* Grayscale the colors, multiply each color value by a constant, just make sure your values don't go over 255.

* (red|green|blue)scale the colors, same as above but only multiply one of the colors.
