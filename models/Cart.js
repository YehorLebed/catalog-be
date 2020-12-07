const { Model } = require('../core/Model');
const { CartProduct } = require('./CartProduct');
const { User } = require('./User');
const { Rule } = require('../utils/validator/Rule');

class Cart extends Model {
    /**
     * Cart constructor
     * @param   {number}         id         cart id
     * @param   {User}           user       owner
     * @param   {CartProduct[]}  products   products
     * @param   {number}         updatedAt  last updated time
     */
    constructor(id = null, user = null, products = [], updatedAt = null) {
        super();
        this.id = id;
        this.user = user;
        this.products = products;
        this.updatedAt = updatedAt;
    }

    static get tableName() { return 'carts'; }

    static getAttributes() {
        return {
            'id': this.id,
            'user_id': this.user ? this.user.id : null,
            'products': this.products ? JSON.stringify(this.products) : null,
            'updated_at': this.updatedAt
        };
    }

    static get rules() {
        return {
            user: new Rule({
                required: true,
            }),
            products: new Rule({
                required: true,
            }),
        }
    }
}

module.exports = { Cart };