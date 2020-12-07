const { Rule } = require('../utils/validator/Rule');

class CartProduct {
    /**
     * CartProduct constructor
     * @param   {number}  id        product id
     * @param   {number}  quantity  product quantity
     * @param   {number}  price     product price
     */
    constructor(id, quantity, price) {
        this.id = id;
        this.quantity = quantity;
        this.price = price;
    }

    /**
     * get rules for validation cart product
     * @return  {quantity: Rule, price: Rule} rules
     */
    static get rules() {
        return {
            id: new Rule({
                type: 'number',
                required: true,
                min: 0,
            }),
            quantity: new Rule({
                type: 'number',
                required: true,
                min: 0
            }),
            price: new Rule({
                type: 'number',
                required: true,
                min: 0,
                max: 999999
            }),
        }
    }
}

module.exports = { CartProduct };