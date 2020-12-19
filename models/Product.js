const { Model } = require('../core/Model');
const { Image } = require('./Image');
const { Category } = require('./Category');
const { Rule } = require('../utils/validator/Rule');

class Product extends Model {
    /**
     * Product constructor
     * @param   {number}     id             product id
     * @param   {string}     title          product title
     * @param   {string}     description  product description
     * @param   {number}     price        product price
     * @param   {boolean}    isPromo     is promo product
     * @param   {Category}   category     product category
     * @param   {Image}      image       product image
     * @param   {number}     createdAt   product time of creation
     */
    constructor(id = null, title = null, description = null, price = null, isPromo = null, category = null, image = new Image(), createdAt = null) {
        super();
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.isPromo = isPromo;
        this.category = category;
        this.image = image
        this.createdAt = createdAt;
    }

    /**
     * getter for tableName
     * @return  {string}
     */
    static get tableName() {
        return 'products';
    }

    static get attributes() {
        return ['id', 'title', 'description', 'price', 'is_promo', 'category_id', 'image', 'created_at']
    }

    /**
     * get model as database schema representation
     * @return  {Object.<string, any>}
     */
    getAttributes() {
        return {
            'id': this.id,
            'title': this.title,
            'description': this.description,
            'price': this.price,
            'is_promo': this.isPromo,
            'category_id': this.category.id,
            'image': JSON.stringify(this.image),
            'created_at': this.createdAt,
        }
    }

    /**
     * getter for attributes
     * @return  {Object.<string, Rule>}
     */
    static get rules() {
        return {
            title: new Rule({
                type: 'string',
                required: true,
                minlength: 3,
                maxlength: 255
            }),
            description: new Rule({
                type: 'string',
                required: true,
                minlength: 3,
                maxlength: 3000,
            }),
            price: new Rule({
                type: 'number',
                required: true,
                min: 0,
                max: 999999,
            }),
            isPromo: new Rule({
                type: 'boolean',
                required: true,
            }),
            category: new Rule({
                required: true,
            }),
        }
    }
}

module.exports = { Product };