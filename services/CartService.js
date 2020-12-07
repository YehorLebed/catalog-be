const moment = require('moment');
const { CartDao, ProductDao } = require('../dao');
const { Cart, CartProduct } = require('../models');
const { CartBuilder } = require('../builder')
const { Validator, ValidationResult } = require('../utils/validator/Validator')
const { UnprocessableEntityError, BadRequestError } = require('../utils/ErrorHelper/customErrors');
const { CartProductBuilder } = require('../builder/CartProductBuilder');

class CartService {

    /**
     * CartService constructor
     * @param   {CartDao}     cartDao     cart dao
     * @param   {ProductDao}  productDao  product dao
     */
    constructor(cartDao, productDao) {
        this.cartDao = cartDao;
        this.productDao = productDao;
    }

    /**
     * get all cart by params
     * @typedef  {Object} CartParams
     * @property {number} page
     * @property {number} amount
     * 
     * @param {CartParams} params
     * @return  {Promise<Cart[]>}
     */
    getAll(params) {
        const validation = Validator.validate(params, {
            page: new Rule({ required: true }),
            amount: new Rule({ required: true }),
        });

        if (!validation.isValid) {
            throw new BadRequestError(validation.errors);
        }

        return this.cartDao.getAll(params);
    }

    /**
     * get cart by user id
     * @param   {number}  id  user id
     * @return  {Promise<Cart>}
     */
    getByUserId(id) {
        return this.cartDao.getByUserId(id);
    }

    /**
     * create category
     * @param   {Cart}    cart
     * @return  {Category}
     */
    async create(cart) {
        // validate cart fields
        const validation = Validator.validate(cart, Cart.rules);
        if (!validation.isValid) {
            throw new UnprocessableEntityError(validation.errors);
        }

        // validate products
        cart.products.forEach(product => {
            const validation = Validator.validate(product, CartProduct.rules);
            if (!validation.isValid) {
                throw new UnprocessableEntityError(validation.errors);
            }
        });

        const cartProducts = await this._processCartProducts(cart);

        return await this.cartDao.create(
            CartBuilder.Build()
                .addUser(cart.user)
                .setCartProducts(cartProducts)
                .addUpdatedAt(moment().unix())
                .build()
        )
    }

    /**
     * update cart
     * @param   {Cart}  cart
     * @return  {Cart}
     */
    async updateProducts(userId, cart, isMerge = false) {

        let cartExists = await this.cartDao.getByUserId(userId);
        if (!cartExists) {
            cartExists = await this.create(cart);
        }

        // validate cart fields
        const validation = Validator.validate(cart, Cart.rules);
        if (!validation.isValid) {
            throw new UnprocessableEntityError(validation.errors);
        }

        // validate products
        cart.products.forEach(product => {
            const validation = Validator.validate(product, CartProduct.rules);
            if (!validation.isValid) {
                throw new UnprocessableEntityError(validation.errors);
            }
        });

        const cartProducts = await this._processCartProducts(cart);

        return isMerge
            ? await this.cartDao.update(
                CartBuilder.Build()
                    .setCart(cartExists)
                    .mergeCartProducts(cartProducts)
                    .addUpdatedAt(moment().unix())
                    .build())
            : await this.cartDao.update(
                CartBuilder.Build()
                    .setCart(cartExists)
                    .setCartProducts(cartProducts)
                    .addUpdatedAt(moment().unix())
                    .build());
    }

    /**
     * delete cart by user id
     * @param   {number}  userId  user id
     * @return  {Promise<void>}
     */
    async deleteByUserId(userId) {
        return await this.cartDao.deleteByUserId(userId);
    }

    /**
     * check for each product if it exists
     * @param   {Cart}  cart  
     * @return  {Promise<CartProduct[]>}
     */
    async _processCartProducts(cart) {
        // check if products exists
        const productsId = cart.products.map(p => p.id);
        const products = await this.productDao.getForCart(productsId);
        productsId.forEach(id => {
            if (products.findIndex(p => p.id === id) === -1) {
                throw new UnprocessableEntityError(`Failed to create cart: product with id ${id} does not exists`)
            }
        });

        // create cartProduct instance
        return products.map(product => {
            const idx = cart.products.findIndex(p => p.id === product.id);
            const quantity = cart.products[idx].quantity;

            return CartProductBuilder.Build()
                .addId(product.id)
                .addQuantity(quantity)
                .addPrice(product.price)
                .build()
        });
    }

}

module.exports = { CartService };