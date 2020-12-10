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
     * get product by property and its value
     * @param   {number}     id product id
     * @return  {Promise<Product>}
     */
    async getById(id) {
        let product = null;

        const sql = `select 
        p.id, p.title, p.description, p.price, p.is_promo, p.image, p.created_at,
        c.id as c_id, c.title as c_title
        from products p
        join categories c on (c.id = p.category_id)
        where p.id = $1`;
        const values = [id];

        try {
            // fetch data
            const data = await this.client.query(sql, values);
            const res = data.rows;

            if (res.length !== 0) {
                const row = res[0];
                // create image
                const image = ImageBuilder.Build()
                    .addPathToSmall(row['image'].small)
                    .addPathToMedium(row['image'].medium)
                    .addPathToOriginal(row['image'].original)
                    .build();

                // create category
                const category = CategoryBuilder.Build()
                    .addId(row['c_id'])
                    .addTitle(row['c_title'])
                    .build();

                // create product
                product = ProductBuilder.Build()
                    .addId(+row['id'])
                    .addTitle(row['title'])
                    .addDescription(row['description'])
                    .addIsPromo(row['is_promo'])
                    .addPrice(+row['price'])
                    .addImage(image)
                    .addCategory(category)
                    .addCreatedAt(row['created_at'])
                    .build();
            }
        }
        catch (error) {
            throw new ServerError(`Failed to get product by id from database`);
        }
        return product;
    }

    /**
     * get producs for cart
     * @param   {number[]}    ids
     * @return  {Promise<Product[]>}
     */
    async getForCart(ids) {
        const products = [];

        const list = ids.map((id, idx) =>
            idx !== ids.length - 1 ? `$${idx + 1},` : `$${idx + 1}`
        ).join('');

        const sql = `select id, price from products where id in(${list})`;
        const values = [...ids];

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows;

            res.forEach(row => {
                const product = ProductBuilder.Build()
                    .addId(raw['id'])
                    .addPrice(raw['price'])
                    .build();

                products.push(product);
            })
        }
        catch (error) {
            throw new ServerError(`Failed to get products by id from database`);
        }

        return products;
    }

    /**
     * get all products
     * @typedef {Object} Params
     * @property {number} page       page
     * @property {number} amount     amount
     * @property {number} [minPrice]   min price
     * @property {number} [maxPrice]   max price
     * @property {number} [categoryId] category id
     * @property {string} [search]     search string
     * @param  {Params} params
     * @return  {Promise<Product[]>}
     */
    async getAll({ page, amount }) {
        const products = [];
        const sql = `select
        p.id, p.title, p.description, p.price, p.is_promo, p.image, p.created_at,
        c.id as c_id, c.title as c_title
        from products p
        join categories c on (c.id = p.category_id)
        limit $1 offset $2`;
        const offset = (page - 1) * amount;
        const values = [amount, offset];

        try {
            // fetch data
            const data = await this.client.query(sql, values);
            const res = data.rows;

            if (res.length !== 0) {
                res.forEach(row => {
                    // create image
                    const image = ImageBuilder.Build()
                        .addPathToSmall(row['image'].small)
                        .addPathToMedium(row['image'].medium)
                        .addPathToOriginal(row['image'].original)
                        .build();

                    // create category
                    const category = CategoryBuilder.Build()
                        .addId(row['c_id'])
                        .addTitle(row['c_title'])
                        .build();

                    // create product
                    const product = ProductBuilder.Build()
                        .addId(+row['id'])
                        .addTitle(row['title'])
                        .addDescription(row['description'])
                        .addIsPromo(row['is_promo'])
                        .addPrice(+row['price'])
                        .addImage(image)
                        .addCategory(category)
                        .addCreatedAt(row['created_at'])
                        .build();

                    products.push(product);
                });
            }
        }
        catch (error) {
            console.error(error);
            throw new ServerError(`Failed to get products from database`);
        }
        return products;
    }

    /**
     * get product views by parameter
     * @param   {number}  userId  user id
     * @param   {number}  limit   limit
     * @return  {Promise<Product[]>}
    */
    async getMostViewedProductByUserId(userId, limit) {

        const products = [];
        const values = [userId, limit];
        const sql = `select
        p.id, p.title, p.description, p.price, p.is_promo, p.image, p.created_at,
        c.id as c_id, c.title as c_title
        from product_views pv
        join products p on (pv.product_id = p.id)
        join categories c on (c.id = p.category_id)
        where pv.user_id = $1
        order by pv.quantity desc
        limit $2
        `;

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows;

            res.forEach(row => {
                // create image
                const image = ImageBuilder.Build()
                    .addPathToSmall(row['image'].small)
                    .addPathToMedium(row['image'].medium)
                    .addPathToOriginal(row['image'].original)
                    .build();

                // create category
                const category = CategoryBuilder.Build()
                    .addId(row['c_id'])
                    .addTitle(row['c_title'])
                    .build();

                // create product
                const product = ProductBuilder.Build()
                    .addId(+row['id'])
                    .addTitle(row['title'])
                    .addDescription(row['description'])
                    .addIsPromo(row['is_promo'])
                    .addPrice(+row['price'])
                    .addImage(image)
                    .addCategory(category)
                    .addCreatedAt(row['created_at'])
                    .build();

                products.push(product);
            });
        }
        catch (error) {
            throw new ServerError(`Failed to get most viewed user products from database`);
        }
        return productViews;
    }

    /**
     * create product in database
     * @param   {Product}  product  product
     * @return  {Promise<Product>}
     */
    async create(product) {
        let createdProduct = null;

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

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows[0];

            // expand product with inserted product id
            createdProduct = ProductBuilder.Build()
                .setProduct(product)
                .addId(res['id'])
                .build();
        }
        catch (error) {
            throw new ServerError('Failed to create product in database');
        }
        return createdProduct;
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

        try {
            await this.client.query(sql, values);
        }
        catch (error) {
            throw new ServerError(`Failed to update product property '${name}' in database`);
        }
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

        try {
            await this.client.query(sql, values);
        }
        catch (error) {
            throw new ServerError(`Failed to update product in database`);
        }
        return updatedProperty;
    }

    /**
     * delete product by id
     * @param   {number}  id product id
     * @return  {Promise<void>}
     */
    async deleteById(id) {
        const sql = `delete from products where id = $1`;
        const values = [id];

        try {
            await this.client.query(sql, values);
        }
        catch (error) {
            throw new ServerError(`Failed to delete product with id '${id}' from database`);
        }
    }
}

module.exports = { ProductDao };