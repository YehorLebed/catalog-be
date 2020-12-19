const { Client } = require('pg');
const { Product } = require('../models');
const { Dao } = require('../core/Dao');
const { ProductBuilder, ImageBuilder, CategoryBuilder } = require('../builder');
const { ServerError } = require('../utils/ErrorHelper/customErrors');

class ProductDao extends Dao {
    /**
     * UserDatabaseClient constructor
     * @param   {Client}  client  client connection
     */
    constructor(client) {
        super(client);
    }

    /**
     * get default schema for product
     */
    getDefaultSchema() {
        return {
            id: 'id',
            title: 'title',
            description: 'description',
            price: 'price',
            isPromo: 'is_promo',
            image: 'image',
            createdAt: 'created_at'
        }
    }

    /**
     * get product by property and its value
     * @param   {number}     id product id
     * @return  {Promise<Product>}
     */
    async getById(id) {
        const sql = `select 
        p.id, p.title, p.description, p.price, p.is_promo, p.image, p.created_at,
        c.id as c_id, c.title as c_title
        from products p
        join categories c on (c.id = p.category_id)
        where p.id = $1`;
        const values = [id];
        const schema = this.getDefaultSchema();

        return this.executeProducts(sql, values, schema, true);
    }

    /**
     * get recently added products
     * @param {number} categoryId 
     * @param {amount: number, page: number} params 
     * @returns {Promise<Product[]>}
     */
    async getRecentlyAddedProducts({ amount = 10, page = 1 }) {
        const sql = `
        select p.id, p.title, p.description, p.price, p.is_promo, p.image, p.created_at
        from products p order by created_at desc limit $1 offset $2;`;
        const offset = (page - 1) * amount;
        const values = [amount, offset];
        const schema = this.getDefaultSchema();
        return this.executeProducts(sql, values, schema);
    }

    /**
     * get popular products
     * @param {number} categoryId 
     * @param {amount: number, page: number} params 
     * @returns {Promise<Product[]>}
     */
    async getPopularProducts({ amount = 10, page = 1 }) {
        const sql = `
        select p.id, p.title, p.description, p.price, p.is_promo, p.image, p.created_at
        from products p 
        join product_views pv on pv.product_id = p.id
        order by pv.quantity
        limit $1 offset $2;
        `;
        const offset = (page - 1) * amount;
        const values = [amount, offset];
        const schema = this.getDefaultSchema();
        return this.executeProducts(sql, values, schema);
    }

    /**
     * get recomended products
     * @param {number} categoryId 
     * @param {amount: number, page: number} params 
     * @returns {Promise<Product[]>}
     */
    async getRecomendedProducts({ amount = 10, page = 1, orderBy, isDesc }) {
        const sql = `
        select p.id, p.title, p.description, p.price, p.is_promo, p.image, p.created_at
        from products p where p.is_promo = true
        ${orderBy ? `order by ${orderBy} ` : ''} 
        ${isDesc && isDesc !== 'false' ? 'desc' : ''}
        limit $1 offset $2;
        `;
        const offset = (page - 1) * amount;
        const values = [amount, offset];
        const schema = this.getDefaultSchema();
        return this.executeProducts(sql, values, schema);
    }

    /**
     * get products by category id
     * @param {number} categoryId 
     * @param {amount: number, page: number} params 
     * @returns {Promise<Product[]>}
     */
    async getProductsByCategoryIdAndParams(categoryId, { amount = 10, page = 1, orderBy, isDesc, minPrice, maxPrice }) {
        let idx = 4;    // $1 and $2 is for limit
        const sql = `
        with recursive r as (
            select c1.id from categories c1 where c1.id = $1
            union
            select c2.id from categories c2
            join r on c2.parent_id = r.id
        )
        select p.id, p.title, p.description, p.price, p.is_promo, p.image, p.created_at
        from r join products p on p.category_id = r.id
        ${minPrice || maxPrice ? 'where ' : ''}
        ${minPrice ? `price > $${idx++}` : ''}
        ${minPrice != undefined && maxPrice != undefined ? ' and ' : ''}
        ${maxPrice ? `price < $${idx++}` : ''}
        ${orderBy ? `order by ${orderBy} ` : ''} 
        ${isDesc && isDesc !== 'false' ? 'desc' : ''}
        limit $2 offset $3;
        `;
        const offset = (page - 1) * amount;
        const values = [categoryId, amount, offset];

        if (minPrice !== undefined) values.push(minPrice);
        if (maxPrice !== undefined) values.push(maxPrice);

        const schema = this.getDefaultSchema();
        return this.executeProducts(sql, values, schema);
    }

    /**
     * get product views by parameter
     * @param   {number}  userId  user id
     * @param   {number}  limit   limit
     * @return  {Promise<Product[]>}
    */
    async getBySearch({ search, amount = 10, page = 1, orderBy, isDesc, minPrice, maxPrice }) {
        let idx = 4;
        const sql = `
        select p.id, p.title, p.description, p.price, p.is_promo, p.image, p.created_at
        from products p
        where (title like $1 or description like $1)
        ${minPrice || maxPrice ? ' and ' : ''}
        ${minPrice ? `price > $${idx++}` : ''}
        ${minPrice != undefined && maxPrice != undefined ? ' and ' : ''}
        ${maxPrice ? `price < $${idx++}` : ''}
        ${orderBy ? `order by ${orderBy} ` : ''}
        ${isDesc && isDesc !== 'false' ? 'desc' : ''}
        limit $2 offset $3;
        `;
        const offset = (page - 1) * amount;
        const values = [`%${search}%`, amount, offset];

        if (minPrice !== undefined) values.push(minPrice);
        if (maxPrice !== undefined) values.push(maxPrice);

        const schema = this.getDefaultSchema();
        return this.executeProducts(sql, values, schema);
    }

    /**
     * get product views by parameter
     * @param   {number}  userId  user id
     * @param   {number}  limit   limit
     * @return  {Promise<Product[]>}
    */
    async getMostViewedProductByUserId(userId, { amount, page }) {
        const sql = `select 
        p.id, p.title, p.description, p.price, p.is_promo, p.image, p.created_at,
        from product_views pv
        join products p on (pv.product_id = p.id)
        join categories c on (c.id = p.category_id)
        where pv.user_id = $1
        order by pv.quantity desc
        limit $2 offset $3`;
        const offset = (page - 1) * amount;
        const values = [userId, amount, offset];
        const schema = this.getDefaultSchema();

        return this.executeProducts(sql, values, schema);
    }

    async executeProducts(sql, values, schema = {}, isSingle = false) {
        const products = [];
        try {
            // fetch data
            const data = await this.client.query(sql, values);
            const res = data.rows;

            res.forEach(row => {
                // create product
                const product = new Product();

                if (schema.id) product.id = row[schema.id]
                if (schema.title) product.title = row[schema.title]
                if (schema.description) product.description = row[schema.description]
                if (schema.isPromo) product.isPromo = row[schema.isPromo]
                if (schema.price) product.price = row[schema.price]
                if (schema.image) product.image = row[schema.image]
                if (schema.createdAt) product.createdAt = row[schema.createdAt]

                products.push(product);
            });
        }
        catch (error) {
            console.error(error);
            throw new ServerError(`Failed to get products from database`);
        }
        return isSingle ? products[0] : products;
    }

    /**
 * get producs for cart
 * @param   {number[]}    ids
 * @return  {Promise<Product[]>}
 */
    async getForCart(ids) {
        const list = ids.map((id, idx) =>
            idx !== ids.length - 1 ? `$${idx + 1},` : `$${idx + 1}`
        ).join('');

        const sql = `select id, price from products where id in(${list})`;
        const values = [...ids];
        const schema = { id: 'id', price: 'price' };

        return this.executeProducts(sql, values, schema);
    }

    /**
     * create product in database
     * @param   {Product}  product  product
     * @return  {Promise<Product>}
     */
    async create(product) {
        const sql = `insert into 
        products(title, description, price, is_promo, image, category_id, created_at) 
        values($1, $2, $3, $4, $5, $6, $7) returning id;`
        const values = [
            product.title,
            product.description,
            product.price,
            product.isPromo,
            JSON.stringify(product.image),
            product.category.id,
            product.createdAt,
        ];

        const schema = { id: 'id' };
        const created = await this.executeProducts(sql, values, schema, true);
        product.id = created.id;
        return product;
    }

    /**
     * update product by property
     * @param   {Product}           product   product
     * @param   {'title'|'description'|'price'|'is_promo'|category_id} name   property name
     * @param   {number|string}     value  property value
     * @returns {Promise<number|string>}
     */
    async updateProperty(product, name, value) {
        const sql = `update products set ${name} = $1 where id = $2 returning ${name}`;
        updatedValue = name !== 'image' ? value : JSON.stringify(value)
        const values = [updatedValue, product.id];
        await this.executeProducts(sql, values);
        return value;
    }

    /**
     * update product
     * @param   {Product}  product  product
     * @return  {Promise<void>}
     */
    async update(product) {
        const sql = `update products 
        set title=$2, description=$3, price=$4, image=$5 is_promo=$6, category_id=$7, created_at=$8
        where id = $1`;
        const values = [
            product.id,
            product.title,
            product.description,
            product.price,
            JSON.stringify(product.image),
            product.isPromo,
            product.category.id,
            product.createdAt,
        ];
        await this.executeProducts(sql, values);
        return product;
    }

    /**
     * delete product by id
     * @param   {number}  id product id
     * @return  {Promise<void>}
     */
    async deleteById(id) {
        const sql = `delete from products where id = $1`;
        const values = [id];
        await this.executeProducts(sql, values);
    }
}

module.exports = { ProductDao };