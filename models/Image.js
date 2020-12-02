const path = require('path');
const { Model } = require('../core/Model');

class Image extends Model {

    static MAX_SIZE = 10 * 1000 * 1000

    static TYPES_REGEX = /jpeg|jpg/;

    static SIZE_SMALL = 100;
    static SIZE_MEDIUM = 256;

    static DEFAULT_NAME = 'original';

    static DIR = path.join(path.dirname(__dirname), 'public', 'images', 'products');
    static DIR_FOR_CLIENT = path.join('images', 'products');

    /**
     * ProductImage constructor
     */
    constructor() {
        super();
        this.small = null;
        this.medium = null;
        this.original = null;
    }

    /**
     * setter for small
     * @param   {string}  path  image path
     */
    set small(path) {
        this._small = path;
    }

    /**
     * setter for medium
     * @param   {string}  path  image path
     */
    set medium(path) {
        this._medium = path;
    }

    /**
     * setter for original
     * @param   {string}  path  image path
     */
    set original(path) {
        this._original = path;
    }

    /**
     * getter for small
     * @return   {string}
     */
    get small() {
        return this._small;
    }

    /**
     * getter for medium
     * @return   {string}
     */
    get medium() {
        return this._medium;
    }

    /**
     * getter for original
     * @return   {string}
     */
    get original() {
        return this._original;
    }
}

module.exports = { Image }