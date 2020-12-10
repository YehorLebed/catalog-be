const { ProductView } = require('../models/ProductView');

class ProductViewBuilder {
    constructor() {
        this.productView = new ProductView();
    }

    /**
     * start building productView model
     * @return  {ProductViewBuilder}
     */
    static Build() {
        return new ProductViewBuilder();
    }

    /**
     * add property to user object
     * @param   {string}        name   property name
     * @param   {any}           value  property value
     * @return  {ProductViewBuilder}
     */
    addProperty(name, value) {
        if (this.productView.hasOwnProperty(name)) {
            this.productView[name] = value;
        }
        return this;
    }

    /**
     * add productView userId
     * @param   {number}     userId  productView userId
     * @return  {ProductViewBuilder}
     */
    addUserId(userId) {
        this.productView.userId = userId;
        return this;
    }

    /**
     * add productView productId
     * @param   {number}     productId  productView productId
     * @return  {ProductViewBuilder}
     */
    addProductId(productId) {
        this.productView.productId = productId;
        return this;
    }

    /**
     * add productView quantity
     * @param   {string}     quantity  productView quantity
     * @return  {ProductViewBuilder}
     */
    addQuantity(quantity) {
        this.productView.quantity = quantity;
        return this;
    }

    /**
     * add productView updatedAt
     * @param   {number}     updatedAt  productView updatedAt
     * @return  {ProductViewBuilder}
     */
    addUpdatedAt(updatedAt) {
        this.productView.updatedAt = updatedAt;
        return this;
    }

    /**
     * build productView model
     * @return  {ProductView}
     */
    build() {
        return this.productView;
    }

    /**
     * reset productView model
     * @return  {ProductViewBuilder}
     */
    reset() {
        this.productView = new ProductView();
        return this;
    }

    /**
     * set productView
     * @param   {[type]}      productView
     * @return  {ProductViewBuilder}
     */
    setProductView(productView) {
        this.productView = productView;
        return this;
    }

    /**
     * getter for productView
     * @return  {ProductView}
     */
    get productView() {
        return this._productView;
    }

    /**
     * setter for productView
     * @param {ProductView} productView productView
     */
    set productView(productView) {
        this._productView = productView;
    }
}

module.exports = { ProductViewBuilder };