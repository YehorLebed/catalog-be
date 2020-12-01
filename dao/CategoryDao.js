const { Client } = require('pg');
const { Category } = require('../models');
const { Dao } = require('../core/Dao');
const { CategoryBuilder } = require('../builder');
const { ServerError } = require('../helpers/ErrorHelper/customErrors');

class CategoryDao extends Dao {
    /**
     * UserDatabaseClient constructor
     * @param   {Client}  client  client connection
     */
    constructor(client) {
        super(client);
    }

    /**
     * get category by property and its value
     * @param   {number}    id category id
     * @return  {Promise<Category>}
     */
    async getById(id) {
        let category = null;

        const sql = `select id, name, parent_id from categories where id = $1 limit 1`;
        const values = [id];

        try {
            // fetch data
            const data = await this.client.query(sql, values);
            const res = data.rows[0];

            if (res) {
                // created parent caregory
                const parent = CategoryBuilder.Build()
                    .addId(res['parent_id'])
                    .build();

                // create category
                category = CategoryBuilder.Build()
                    .addId(res['id'])
                    .addTitle(res['name'])
                    .addParent(parent)
                    .build();
            }
        }
        catch (error) {
            throw new ServerError(`Failed to get category by id from database`);
        }
        return category;
    }

    /**
     * get all categories
     * @param   {number}  page    page number
     * @param   {number}  amount  amount number
     * @return  {Promise<Category[]>}
     */
    async getAllParent(page, amount) {
        const categories = [];

        const sql = `select 
        id, name 
        from categories 
        where parent_id is null 
        limit $1 offset $2`;
        const offset = (page - 1) * amount;
        const values = [amount, offset];

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows;

            if (res.length !== 0) {
                res.forEach((row) => {
                    // create category category
                    const category = CategoryBuilder.Build()
                        .addId(row['id'])
                        .addTitle(row['name'])
                        .addParent(null)
                        .build();

                    // add category to list
                    categories.push(category);
                });
            }
        }
        catch (error) {
            throw new ServerError('Failed to get categories from database');
        }
        return categories;
    }

    /**
     * create category in database
     * @param   {Category}  category  category
     * @return  {Promise<Category>}
     */
    async create(category) {
        let createdCategory = null;

        const sql = `insert into categories(name, parent) values($1, $2) returning id;`
        const values = [category.name, category.parent];

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows[0];

            // expand category with inserted category id
            createdCategory = CategoryBuilder.Build()
                .setCategory(category)
                .addId(res['id'])
                .build();
        }
        catch (error) {
            throw new ServerError('Failed to create category in database');
        }
        return createdCategory;
    }

    /**
     * update category by property
     * @param   {Category}           category   category
     * @param   {'name'|'parent_id'}         name   property name
     * @param   {number|string}  value  property value
     * @returns {Promise<number|string>}
     */
    async updateProperty(category, name, value) {
        let updatedProperty = null

        const sql = `update categories set ${name} = $1 where id = $2 returning ${name}`;
        const values = [value, category.id];

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows[0];
            updatedProperty = res[name];
        }
        catch (error) {
            throw new ServerError(`Failed to update category property '${name}' in database`);
        }
        return updatedProperty;
    }

    /**
     * delete category by id
     * @param   {number}  id category id
     * @return  {Promise<void>}
     */
    async deleteById(id) {
        const sql = `delete from categories where id = $1`;
        const values = [id];

        try {
            await this.client.query(sql, values);
        }
        catch (error) {
            throw new ServerError(`Failed to delete category with id '${id}' from database`);
        }
    }
}

module.exports = { CategoryDao };