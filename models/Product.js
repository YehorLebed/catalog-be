const { Model } = require('../core/Model');
const { Image } = require('./Image');
const { Category } = require('./Category');
const { Rule } = require('../helpers/validator/Rule');

class Product extends Model {
    /**
     * Product constructor
     * @param   {number}     id             product id
     * @param   {string}     title          product title
     * @param   {string}     description    product description
     * @param   {number}     price          product price
     * @param   {boolean}    isPromo       is promo product
     * @param   {Category}   category       product category
     * @param   {Image[]}    images         product images
     * @param   {number}     createdAt     product time of creation
     */
    constructor(id = null, title = null, description = null, price = null, isPromo = null, category = null, images = [], createdAt = null) {
        super();
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.isPromo = isPromo;
        this.category = category;
        this.images = images
        this.createdAt = createdAt;
    }

    /**
     * getter for attributes
     * @return  {Object.<string, Rule>}
     */
    static get rules() {
        return {
            id: new Rule({
                type: 'integer',
                required: false,
                min: 0,
            }),
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
            createdAt: new Rule({
                type: 'integer',
                required: true,
                min: 0,
            }),
        }
    }
}

module.exports = { Product };