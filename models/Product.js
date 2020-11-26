const { Model } = require('../core/Model');
const { Rule } = require('../helpers/validation/Rule');

class Product extends Model {
    /**
     * Product constructor
     * @param   {number}   id           product id
     * @param   {string}   title        product title
     * @param   {string}   description  product description
     * @param   {number}   price        product price
     * @param   {boolean}  isPromo      is promo product
     * @param   {number}   categoryId   product category id
     * @param   {number}   createdAt    product time of creation
     */
    constructor(id, title, description, price, isPromo, categoryId, createdAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.isPromo = isPromo;
        this.categoryId = categoryId;
        this.createdAt = createdAt;
    }

    static get tableName() {
        return 'products';
    }

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
            categoryId: new Rule({
                type: 'integer',
                required: true,
                min: 0,
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