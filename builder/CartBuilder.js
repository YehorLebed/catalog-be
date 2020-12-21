const e = require('express');
const { Cart } = require('../models/Cart');
const { CartProduct } = require('../models/CartProduct');

class CartBuilder {

    constructor() {
        this.cart = new Cart();
    }

    /**
     * start building cart model
     * @return  {CartBuilder}
     */
    static Build() {
        return new CartBuilder();
    }

    /**
     * add property to user object
     * @param   {string}        name   property name
     * @param   {any}           value  property value
     * @return  {CartBuilder}
     */
    addProperty(name, value) {
        if (this.cart.hasOwnProperty(name)) {
            this.cart[name] = value;
        }
        return this;
    }

    /**
     * add cart id
     * @param   {number}     id  cart id
     * @return  {CartBuilder}
     */
    addId(id) {
        this.cart.id = id;
        return this;
    }

    /**
     * add cart user
     * @param   {User}        user  cart owner
     * @return  {CartBuilder}
     */
    addUser(user) {
        this.cart.user = user;
        return this;
    }

    /**
     * add cart updatedAt
     * @param   {number}        updatedAt  unix
     * @return  {CartBuilder}
     */
    addUpdatedAt(updatedAt) {
        this.cart.updatedAt = updatedAt;
        return this;
    }

    /**
     * add cart product
     * @param   {CartProduct[]}  product  cart product
     * @return  {CartBuilder}
     */
    setCartProducts(products) {
        this.cart.products = products;
        return this;
    }

    /**
     * add cart product
     * @param   {CartProduct[]}  products  cart product
     * @return  {CartBuilder}
     */
    mergeCartProducts(products) {
        // update existing items
        this.cart.products = this.cart.products.map(cp => {
            const idxExists = products.findIndex(p => p.id === cp.id);
            if (idxExists === -1) return cp;

            cp.quantity += products[idxExists].quantity;
            cp.price = products[idxExists].price;

            products = products.filter(p => p.id !== cp.id);
            return cp;
        });

        // add new products;
        this.cart.products = [...products, ...this.cart.products,];

        return this;
    }

    /**
     * addCart products
     * @param   {CartProduct[]}  products  products to addd
     * @return  {CartBuilder}
     */
    addCartProducts(products) {
        products.forEach(product => {
            const idx = this.cart.products.findIndex(p => p.id === product.id);
            if (idx === -1) this.cart.products.push(product);
            else this.cart.products[idx].quantity += product.quantity;
        });
        return this;
    }

    /**
     * remove products from cart
     * @param   {CartProduct[]}  products  products to remove
     * @return  {CartBuilder}
     */
    removeCartProducts(products) {
        products.forEach(product => {
            const idx = this.cart.products.findIndex(p => p.id === product.id);
            if (idx !== -1) {
                this.cart.products[idx].quantity -= product.quantity;
                if (this.cart.products[idx].quantity === 0) {
                    this.cart.products = [
                        ...this.cart.products.slice(0, idx),
                        ...this.cart.products.slice(idx + 1)
                    ];
                }
            }
        });
        return this;
    }

    /**
     * build cart model
     * @return  {Cart}
     */
    build() {
        return this.cart;
    }

    /**
     * reset cart model
     * @return  {CartBuilder}
     */
    reset() {
        this.cart = new Cart();
        return this;
    }

    /**
     * set cart
     * @param   {[type]}      cart
     * @return  {CartBuilder}
     */
    setCart(cart) {
        this.cart = cart;
        return this;
    }

    /**
     * getter for cart
     * @return  {Cart}
     */
    get cart() {
        return this._cart;
    }

    /**
     * setter for cart
     * @param {Cart} cart cart
     */
    set cart(cart) {
        this._cart = cart;
    }
}

module.exports = { CartBuilder };
