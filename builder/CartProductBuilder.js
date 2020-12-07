const { CartProduct } = require('../models/CartProduct');

class CartProductBuilder {

    constructor() {
        this.cartProduct = new CartProduct();
    }

    /**
     * start building cartProduct model
     * @return  {CartProductBuilder}
     */
    static Build() {
        return new CartProductBuilder();
    }

    /**
     * add property to user object
     * @param   {string}        name   property name
     * @param   {any}           value  property value
     * @return  {CartProductBuilder}
     */
    addProperty(name, value) {
        if (this.cartProduct.hasOwnProperty(name)) {
            this.cartProduct[name] = value;
        }
        return this;
    }

    /**
     * add cartProduct id
     * @param   {number}     id  cartProduct id
     * @return  {CartProductBuilder}
     */
    addId(id) {
        this.cartProduct.id = id;
        return this;
    }

    /**
     * add product category quantity
     * @param   {number}  quantity  product quantity
     * @return  {CartProductBuilder}
     */
    addQuantity(quantity) {
        this.cartProduct.quantity = quantity;
    }

    /**
     * add product category price
     * @param   {number}  price  product price
     * @return  {CartProductBuilder}
     */
    addPrice(price) {
        this.cartProduct.price = price;
    }

    /**
     * build cartProduct model
     * @return  {CartProduct}
     */
    build() {
        return this.cartProduct;
    }

    /**
     * reset cartProduct model
     * @return  {CartProductBuilder}
     */
    reset() {
        this.cartProduct = new CartProduct();
        return this;
    }

    /**
     * set cartProduct
     * @param   {[type]}      cartProduct
     * @return  {CartProductBuilder}
     */
    setCartProduct(cartProduct) {
        this.cartProduct = cartProduct;
        return this;
    }

    /**
     * getter for cartProduct
     * @return  {CartProduct}
     */
    get cartProduct() {
        return this._cartProduct;
    }

    /**
     * setter for cartProduct
     * @param {CartProduct} cartProduct cartProduct
     */
    set cartProduct(cartProduct) {
        this._cartProduct = cartProduct;
    }
}

module.exports = { CartProductBuilder };
