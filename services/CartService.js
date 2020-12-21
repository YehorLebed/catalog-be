const moment = require('moment');
const { CartDao, ProductDao } = require('../dao');
const { Cart, CartProduct } = require('../models');
const { CartBuilder } = require('../builder')
const { Rule } = require('../utils/validator/Rule')
const { Validator, ValidationResult } = require('../utils/validator/Validator')
const { UnprocessableEntityError, BadRequestError } = require('../utils/ErrorHelper/customErrors');
const { CartProductBuilder } = require('../builder/CartProductBuilder');
const { ResourceNotFoundError } = require('../utils/ErrorHelper/customErrors/ResourceNotFoundError');

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
    async getByUserId(id) {
        const cart = await this.cartDao.getByUserId(id);
        if (cart && cart.products.length !== 0) {
            const products = await this.productDao.getForCart(cart.products.map(p => p.id));
            cart.products = cart.products.map(({ id, quantity }) => {
                const idxProductExists = products.findIndex(p => p.id === id);
                if (idxProductExists !== -1) {
                    return { product: products[idxProductExists], quantity };
                }
            })
        }
        return cart;
    }

    /**
     * update cart
     * @param   {number} userId user id
     * @param   {{id: number, quantity: number}} products
     * @param   {'add'|'remove'|'merge'} type update type
     * @return  {Cart}
     */
    async updateProducts(userId, { products }, type) {

        // get cart to update
        let cartExists = await this.cartDao.getByUserId(userId);
        if (!cartExists) {
            throw new ResourceNotFoundError('User or user cart does not exists');
        }

        // check for valid update type provided
        if (!['add', 'remove', 'merge'].includes(type)) {
            throw new UnprocessableEntityError('Invalid update type provided');
        }

        // validate products
        cartExists.products.forEach(product => {
            const validation = Validator.validate(product, CartProduct.rules);
            if (!validation.isValid) {
                throw new UnprocessableEntityError(validation.errors);
            }
        });

        let updatedCart = null
        if (type === 'add') {
            products = await this.filterCartProductsExists(products);
            updatedCart = CartBuilder.Build()
                .setCart(cartExists)
                .addCartProducts(products)
                .build();
        }
        else if (type === 'remove') {
            updatedCart = CartBuilder.Build()
                .setCart(cartExists)
                .removeCartProducts(products)
                .build();
        }
        else if (type === 'merge') {
            products = await this.filterCartProductsExists(products);
            updatedCart = CartBuilder.Build()
                .setCart(cartExists)
                .mergeCartProducts(products)
                .build();
        }

        return await this.cartDao.update(updatedCart);
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
     * @param   {CartProduct[]}  cartProducts  
     * @return  {Promise<CartProduct[]>}
     */
    async filterCartProductsExists(cartProducts) {
        const products = await this.productDao.getForCart(cartProducts.map(p => p.id));
        const idsProductExists = products.map(p => p.id);
        return cartProducts.filter(cp => idsProductExists.includes(cp.id));
    }

}

module.exports = { CartService };