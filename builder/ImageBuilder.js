const { Image } = require('../models/Image');

class ImageBuilder {

    /**
     * ImageBuilder constructor
     */
    constructor() {
        this.image = new Image();
    }

    /**
     * initialize productimage building
     * @return  {ImageBuilder}
     */
    static Build() {
        return new ImageBuilder();
    }

    /**
     * set product image
     * @param   {Image}  image  product image
     * @return  {ImageBuilder}
     */
    setImage(image) {
        this.image = image;
        return this;
    }

    /**
     * add path to small image
     * @param   {string}  path  image path
     * @return  {ImageBuilder}
     */
    addPathToSmall(path) {
        this.image.small = path;
        return this;
    }

    /**
     * add path to medium image
     * @param   {string}  path  image path
     * @return  {ImageBuilder}
     */
    addPathToMedium(path) {
        this.image.medium = path;
        return this;
    }

    /**
     * add path to original image
     * @param   {string}  path  image path
     * @return  {ImageBuilder}
     */
    addPathToOriginal(path) {
        this.image.original = path;
        return this;
    }

    /**
     * getter for image
     * @return  {Image}
     */
    get image() {
        return this._image;
    }

    /**
     * setter for image
     * @param   {Image}  image  product image
     */
    set image(image) {
        this._image = image
    }
}

module.exports = { ImageBuilder };