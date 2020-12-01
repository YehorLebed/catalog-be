const { Image } = require('../models/Image');

class ImageBuilder {

    constructor() {
        this.image = new Image();
    }

    /**
     * start building image model
     * @return  {ImageBuilder}
     */
    static Build() {
        return new ImageBuilder();
    }

    /**
     * add property to user object
     * @param   {string}        name   property name
     * @param   {any}           value  property value
     * @return  {ImageBuilder}
     */
    addProperty(name, value) {
        if (this.image.hasOwnProperty(name)) {
            this.image[name] = value;
        }
        return this;
    }

    /**
     * add image id
     * @param   {number}     id  image id
     * @return  {ImageBuilder}
     */
    addId(id) {
        this.image.id = id;
        return this;
    }

    /**
     * add image title
     * @param   {string}     title  image title
     * @return  {ImageBuilder}
     */
    addTitle(title) {
        this.image.title = title;
        return this;
    }

    /**
     * add image path
     * @param   {string}     path  image path
     * @return  {ImageBuilder}
     */
    addPath(path) {
        this.image.path = path;
        return this;
    }

    /**
     * add image size
     * @param   {string}     size  image size
     * @return  {ImageBuilder}
     */
    addSize(size) {
        this.image.size = size;
        return this;
    }

    /**
     * build image model
     * @return  {Image}
     */
    build() {
        return this.image;
    }

    /**
     * reset image model
     * @return  {ImageBuilder}
     */
    reset() {
        this.image = new Image();
        return this;
    }

    /**
     * set image
     * @param   {[type]}      image
     * @return  {ImageBuilder}
     */
    setImage(image) {
        this.image = image;
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
     * @param {Image} image image
     */
    set image(image) {
        this._image = image;
    }
}

module.exports = { ImageBuilder };
