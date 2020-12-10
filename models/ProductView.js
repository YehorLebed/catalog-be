const { Model } = require('../core/Model')
const moment = require('moment');

class ProductView extends Model {

    /**
     * ProductView constructor
     * @param   {number}  userId       user id
     * @param   {number}  productId    product id
     * @param   {number}  quantity     quantity
     * @param   {number}  updatedAt    updated at
     */
    constructor(userId = null, productId = null, quantity = 0, updatedAt = null) {
        super();
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.updatedAt = updatedAt || moment().unix();
    }

    /**
     * get data as table attributes
     * @return  {Object.<string, number>}
     */
    getAttributes() {
        return {
            'user_id': this.userId,
            'product_id': this.productId,
            'quantity': this.quantity,
            'updated_at': this.updatedAt,
        };
    }
}

module.exports = { ProductView };
