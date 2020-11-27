const { Model } = require('../core/Model');
const { Rule } = require('../helpers/validator/Rule');

class Product extends Model {
    /**
     * Product constructor
     * @param   {number}   id           product id
     * @param   {string}   title        product title
     * @param   {string}   description  product description
     * @param   {number}   price        product price
     * @param   {boolean}  is_promo      is promo product
     * @param   {number}   category_id   product category id
     * @param   {number}   created_at    product time of creation
     */
    constructor(id, title, description, price, is_promo, category_id, created_at) {
        super();
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.is_promo = is_promo;
        this.category_id = category_id;
        this.created_at = created_at;
    }

    static get tableName() {
        return 'products';
    }

    static get attributes() {
        return ['title', 'description', 'price', 'is_promo', 'category_id', 'created_at'];
    }

    /**
     * getter for attributes
     * @return  {string[]}
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
            is_promo: new Rule({
                type: 'boolean',
                required: true,
            }),
            category_id: new Rule({
                type: 'integer',
                required: true,
                min: 0,
            }),
            created_at: new Rule({
                type: 'integer',
                required: true,
                min: 0,
            }),
        }
    }
}

module.exports = { Product };