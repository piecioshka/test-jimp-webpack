'use strict';

var Jimp = require('jimp');

module.exports = {
    convert: function (source, destination) {
        Jimp.read(source, function (err, lenna) {
            if (err) throw err;
            lenna.resize(256, 256)           // resize
                .quality(60)                 // set JPEG quality
                .greyscale()                 // set greyscale
                .write(destination);         // save
        });
    }
};
