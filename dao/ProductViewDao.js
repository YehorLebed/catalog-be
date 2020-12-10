const { Client } = require('pg');
const { Dao } = require('../core/Dao');
const { ProductView } = require('../models/ProductView');
const { ProductViewBuilder } = require('../builder/ProductViewBuilder');

class ProductViewDao extends Dao {

    /**
     * UserDatabaseClient constructor
     * @param   {Client}  client  client connection
     */
    constructor(client) {
        super(client);
    }

    /**
     * get product view vy user id and product id
     * @param   {number}  userId     user id
     * @param   {number}  productId  product id
     * @return  {Promise<ProductView>}
     */
    async getByUserIdAndProductId(userId, productId) {
        let productView = null;
        const value = [userId, productId];
        const sql = `select user_id, product_id, quantity, updated_at 
        from product_view where user_id = $1 and product_id = $2`;

        try {
            const data = await this.client.query(sql, value);
            const res = data.rows[0];

            productView = ProductViewBuilder.Build()
                .addUserId(res['user_id'])
                .addProductId(res['product_id'])
                .addQuantity(res['quantity'])
                .addUpdatedAt(res['updated_at'])
                .build();
        }
        catch (error) {
            throw new ServerError(`Failed to get product view from database`);
        }
        return productView;
    }

    /**
     * get product views by parameter
     * @param   {ProductView}  productView
     * @return  {Promise<ProductView>}
     */
    async create(productView) {
        const value = [value];
        const sql = `insert into product_view(user_id, product_id, quantity, updated_at) 
        values($1,$2,$3,$4)`;

        try {
            await this.client.query(sql, value);
        }
        catch (error) {
            throw new ServerError(`Failed to get product view by ${name} from database`);
        }
        return productView;
    }

    /**
     * get product views by parameter
     * @param   {ProductView}  productView
     * @return  {Promise<ProductView>}
     */
    async update(productView) {
        const { userId, productId, quantity, updatedAt } = productView;
        const value = [quantity, updatedAt, userId, productId];
        const sql = `update product_view
        set quantity = $1, updated_at = $2
        where user_id = $3 and product_id = $4`;

        try {
            await this.client.query(sql, value);
        }
        catch (error) {
            throw new ServerError(`Failed to update product view in database`);
        }
        return productView;
    }
}

module.exports = { ProductViewDao };