const path = require('path');

class Image {

    static MAX_SIZE = 10 * 1000 * 1000

    static TYPES_REGEX = /jpeg|jpg|png/;

    static SIZE_SMALL = 100;
    static SIZE_MEDIUM = 256;

    static DEFAULT_NAME = 'original';

    static DIR = path.join(path.dirname(__dirname), 'public', 'images', 'products');
    static DIR_FOR_CLIENT = path.join('images', 'products');

    /**
     * ProductImage constructor
     * @param {string} small
     * @param {string} medium
     * @param {string} original
     */
    constructor(
        small = path.join(Image.DIR_FOR_CLIENT, '0', 'medium.jpg'),
        medium = path.join(Image.DIR_FOR_CLIENT, '0', 'small.jpg'),
        original = path.join(Image.DIR_FOR_CLIENT, '0', 'original.jpg')
    ) {
        this.small = small;
        this.medium = medium;
        this.original = original;
    }
}

module.exports = { Image }