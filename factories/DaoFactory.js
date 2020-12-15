const { Client } = require('pg');
const { Dao } = require('../core/Dao');
const {
    UserDao, RoleDao, ImageDao, ProductDao,
    CategoryDao, CartDao, ProductViewDao } = require('../dao');
const { Database } = require('../core/Database');

class DaoFactory {

    /**
     * allowed dao types
     * @return  {string[]}
     */
    static get types() {
        return ['user', 'role', 'image', 'product', 'category', 'cart', 'productView'];
    }

    /**
     * create db client
     * @return  {Promise<Client>}
     */
    static async createClient() {
        return await Database.instance.createClient();
    }

    /**
     * get dao
     * @param   {'user'|'role'|'image'|'product'|'category'|'cart'|'productView'}  type  dao type
     * @return  {Promise<Dao>}
     */
    static async createDao(type, client = null) {
        if (!type || typeof type !== 'string' || !DaoFactory.types.includes(type)) {
            return null;
        }

        if (type === 'image') {
            return new ImageDao();
        }

        // create database connection 
        if (!client) {
            client = await Database.instance.createClient();
        }

        // create dao
        if (type === 'user') {
            return new UserDao(client);
        }
        else if (type === 'role') {
            return new RoleDao(client);
        }
        else if (type === 'product') {
            return new ProductDao(client);
        }
        else if (type === 'category') {
            return new CategoryDao(client);
        }
        else if (type === 'cart') {
            return new CartDao(client);
        } else if (type = 'productView') {
            return new ProductViewDao(client);
        }

        return null;
    }
}

module.exports = { DaoFactory };