const { Model } = require('../core/Model');
const { CartProduct } = require('./CartProduct');
const { Rule } = require('../utils/validator/Rule');

class Cart extends Model {
    /**
     * Cart constructor
     * @param   {number}         id         cart id
     * @param   {number}         user_id     owner id
     * @param   {CartProduct[]}  products   products
     * @param   {number}         updated_at  last updated time
     */
    constructor(id, user_id, products, updated_at) {
        super();
        this.id = id;
        this.user_id = user_id;
        this.products = products;
        this.updated_at = updated_at;
    }

    static get tableName() { return 'carts'; }

    static get attributes() {
        return ['user_id', 'products', 'updated_at'];
    }

    static get rules() {
        return {
            id: new Rule({
                type: 'number',
                required: false,
                min: 0,
            }),
            user_id: new Rule({
                type: 'number',
                required: true,
                min: 0,
            }),
            products: CartProduct.rules,
            updated_at: new Rule({
                type: 'number',
                required: true,
                min: 0
            }),
        }
    }
}

module.exports = { Cart };