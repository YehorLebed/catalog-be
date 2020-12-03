const { Product } = require('../models/Product');
const { Category } = require('../models/Category');
const { Image } = require('../models/Image');

class ProductBuilder {

    constructor() {
        this.product = new Product();
    }

    /**
     * start building product model
     * @return  {ProductBuilder}
     */
    static Build() {
        return new ProductBuilder();
    }

    /**
     * add property to user object
     * @param   {string}        name   property name
     * @param   {any}           value  property value
     * @return  {ProductBuilder}
     */
    addProperty(name, value) {
        if (this.product.hasOwnProperty(name)) {
            this.product[name] = value;
        }
        return this;
    }

    /**
     * add product id
     * @param   {number}     id  product id
     * @return  {ProductBuilder}
     */
    addId(id) {
        this.product.id = id;
        return this;
    }

    /**
     * add product title
     * @param   {string}     title  product title
     * @return  {ProductBuilder}
     */
    addTitle(title) {
        this.product.title = title;
        return this;
    }

    /**
     * add product description
     * @param   {string}     description  product description
     * @return  {ProductBuilder}
     */
    addDescription(description) {
        this.product.description = description;
        return this;
    }

    /**
     * add product price
     * @param   {number}     price  product price
     * @return  {ProductBuilder}
     */
    addPrice(price) {
        this.product.price = price;
        return this;
    }

    /**
     * add product isPromo
     * @param   {boolean}     isPromo  product isPromo
     * @return  {ProductBuilder}
     */
    addIsPromo(isPromo) {
        this.product.isPromo = isPromo;
        return this;
    }

    /**
     * add product category
     * @param   {Category}     category  product category
     * @return  {ProductBuilder}
     */
    addCategory(category) {
        this.product.category = category;
        return this;
    }

    /**
     * add product images
     * @param   {Image}     image  product images
     * @return  {ProductBuilder}
     */
    addImage(images) {
        this.product.image = image;
        return this;
    }

    /**
     * add product createdAt
     * @param   {number}     createdAt  product createdAt
     * @return  {ProductBuilder}
     */
    addCreatedAt(createdAt) {
        this.product.createdAt = createdAt;
        return this;
    }

    /**
     * build product model
     * @return  {Product}
     */
    build() {
        return this.product;
    }

    /**
     * reset product model
     * @return  {ProductBuilder}
     */
    reset() {
        this.product = new Product();
        return this;
    }

    /**
     * set product
     * @param   {[type]}      product
     * @return  {ProductBuilder}
     */
    setProduct(product) {
        this.product = product;
        return this;
    }

    /**
     * getter for product
     * @return  {Product}
     */
    get product() {
        return this._product;
    }

    /**
     * setter for product
     * @param {Product} product product
     */
    set product(product) {
        this._product = product;
    }
}

module.exports = { ProductBuilder };
