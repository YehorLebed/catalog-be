const { ServerError } = require('../utils/ErrorHelper/customErrors/ServerError');
const { CartBuilder, UserBuilder } = require('../builder');
const { User, Cart } = require('../models');
const { Dao } = require('../core/Dao');

class CartDao extends Dao {
    /**
     * UserDatabaseClient constructor
     * @param   {Client}  client  client connection
     */
    constructor(client) {
        super(client);
    }

    /**
     * get cart by user id
     * @param   {number}  userId    user id
     * @return  {Promise<Cart>}
     */
    async getByUserId(userId) {
        let cart = null;

        const sql = `select id, products, updated_at from carts where user_id = $1 limit 1`;
        const values = [userId];

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows[0];

            if (res) {
                cart = CartBuilder.Build()
                    .addId(res['id'])
                    .addUser({ id: userId })
                    .setCartProducts(res['products'])
                    .addUpdatedAt(res['updated_at'])
                    .build();
            }
        }
        catch (error) {
            console.log(error);
            throw new ServerError(`Failed to get cart by user id from database`);
        }
        return cart;
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
    async getAll({ page, amount }) {
        const carts = [];

        const sql = `select 
        c.id, c.products, c.updated_at,
        u.id as u_id, u.email as u_email
        from carts c
        join users u on (u.id = c.user_id)
        limit $1 offset $2`;
        const offset = (page - 1) * amount;
        const values = [amount, offset];

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows;

            res.forEach(row => {
                const cart = CartBuilder.Build()
                    .addId(row['id'])
                    .addUser({ id: row['u_id'], email: row['u_email'] })
                    .setCartProducts(row['products'])
                    .addUpdatedAt(row['updated_at'])
                    .build();

                carts.push(cart);
            })
        }
        catch (error) {
            throw new ServerError(`Failed to get carts from database`);
        }
        return carts;
    }

    /**
     * create user cart
     * @param   {Cart}  cart cart to create
     * @return  {Promise<Cart>}
     */
    async create(cart) {
        let createdCart = null;

        const sql = `insert into cart(user_id, products, updated_at) values($1, $2, $3) returning id`;
        const products = JSON.stringify(cart.products);
        const values = [cart.user.id, products, cart.updatedAt];

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows[0];

            createdCart = CartBuilder.Build()
                .setCart(cart)
                .addId(res['id'])
                .build();
        }
        catch (error) {
            throw new ServerError(`Failed to create cart in database`);
        }
        return createdCart;
    }

    /**
     * update user cart
     * @param   {Cart}  cart cart to update
     * @return  {Promise<void>}
     */
    async update(cart) {
        const sql = `update carts 
        set user_id=$2, products=$3, updated_at=$4
        where id = $1`;
        const products = JSON.stringify(cart.products);
        const values = [cart.id, cart.user.id, products, cart.updatedAt];

        try {
            await this.client.query(sql, values);
        }
        catch (error) {
            throw new ServerError(`Failed to create cart in database`);
        }
    }

    /**
     * delete cart by id
     * @param   {number}  id user id
     * @return  {Promise<void>}
     */
    async deleteByUserId(id) {
        const sql = `delete from carts where user_id = $1`;
        const values = [id];

        try {
            await this.client.query(sql, values);
        }
        catch (error) {
            throw new ServerError(`Failed to delete cart with user id '${id}' from database`);
        }
    }
}

module.exports = { CartDao };