class CartProduct {
    /**
     * CartProduct constructor
     * @param   {number}  id        product id
     * @param   {number}  quantity  product quantity
     */
    constructor(id, quantity) {
        this.id = id;
        this.quantity = quantity;
    }
}

module.exports = { CartProduct };