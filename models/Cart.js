const { Model } = require('../core/Model');
const { CartProduct } = require('./CartProduct');
const { Rule } = require('../helpers/validator/Rule');

class Cart extends Model {
    /**
     * Cart constructor
     * @param   {number}         id         cart id
     * @param   {number}         userId     owner id
     * @param   {CartProduct[]}  products   products
     * @param   {number}         updatedAt  last updated time
     */
    constructor(id, userId, products, updatedAt) {
        super();
        this.id = id;
        this.userId = userId;
        this.products = products;
        this.updatedAt = updatedAt;
    }

    /**
     * getter for table name
     * @return  {string}
     */
    static get tableName() {
        return 'carts';
    }

    static get rules() {
        return {
            id: new Rule({
                type: 'integer',
                required: false,
                min: 0,
            }),
            userId: new Rule({
                type: 'integer',
                required: true,
                min: 0,
            }),
            products: CartProduct.rules,
            updatedAt: new Rule({
                type: 'integer',
                required: true,
                min: 0
            }),
        }
    }
}

module.exports = { Cart };