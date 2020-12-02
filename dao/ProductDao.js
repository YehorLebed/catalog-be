const { Client } = require('pg');
const { Product, Image, Category } = require('../models');
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
        id, title, description, price, is_promo, created_at,
        c.id as c_id, c.name as c_name
        i.id as i_id, i.title as i_title, i.path as i_path, i.size as i_size
        from products p
        right join categories c on (c.id = p.id)
        right join images i on (i.id = p.id)
        group by p.id
        where id = $1`;
        const values = [id];

        try {
            // fetch data
            const data = await this.client.query(sql, values);
            const res = data.rows;

            if (res.length !== 0) {
                const images = [];
                res.forEach(row => {
                    // create image
                    const image = ImageBuilder.Build()
                        .addId(row['i_id'])
                        .addTitle(row['i_title'])
                        .addPath(row['i_path'])
                        .addSize(row['i_size'])
                        .build();
                    images.push(image);
                });
                const row = res[0];

                // create category
                const category = CategoryBuilder.Build()
                    .addId(row['c_id'])
                    .addTitle(row['c_title'])
                    .build();

                // create product
                product = ProductBuilder.Build()
                    .addId(row['id'])
                    .addTitle(row['title'])
                    .addDescription(row['description'])
                    .addIsPromo(row['is_promo'])
                    .addImages(images)
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
     * get all products
     * @param   {number}  page    page number
     * @param   {number}  amount  amount number
     * @return  {Promise<Product[]>}
     */
    async getAll(page, amount) {
        const products = [];

        const sql = `select distinct
        id, title, description, price, is_promo, created_at,
        c.id as c_id, c.name as c_name
        i.id as i_id, i.title as i_title, i.path as i_path, i.size as i_size
        from products p
        right join categories c on (c.id = p.id)
        right join images i on (i.id = p.id)
        group by p.id
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
                        .addId(row['i_id'])
                        .addTitle(row['i_title'])
                        .addPath(row['i_path'])
                        .addSize(row['i_size'])
                        .build();

                    // create category
                    const category = CategoryBuilder.Build()
                        .addId(row['c_id'])
                        .addTitle(row['c_title'])
                        .build();

                    // create product
                    const product = ProductBuilder.Build()
                        .addId(row['id'])
                        .addTitle(row['title'])
                        .addDescription(row['description'])
                        .addIsPromo(row['is_promo'])
                        .addImage(image)
                        .addCategory(category)
                        .addCreatedAt(row['created_at'])
                        .build();

                    products.push(product);
                });
            }
        }
        catch (error) {
            throw new ServerError(`Failed to get products from database`);
        }
        return products;
    }

    /**
     * create product in database
     * @param   {Product}  product  product
     * @return  {Promise<Product>}
     */
    async create(product) {
        let createdProduct = null;

        const sql = `insert into 
        products(title, description, price, is_promo, category_id, created_at) 
        values($1, $2, $3, $4, $5, $6) returning id;`
        const values = [
            product.title,
            product.description,
            product.price,
            product.isPromo,
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
        let updatedProperty = null

        const sql = `update products set ${name} = $1 where id = $2 returning ${name}`;
        const values = [value, product.id];

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows[0];
            updatedProperty = res[name];
        }
        catch (error) {
            throw new ServerError(`Failed to update product property '${name}' in database`);
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