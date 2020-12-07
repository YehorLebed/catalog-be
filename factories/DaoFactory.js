const { Dao } = require('../core/Dao');
const { UserDao, RoleDao, ImageDao, ProductDao, CategoryDao, CartDao } = require('../dao');
const { Database } = require('../core/Database');

class DaoFactory {

    /**
     * allowed dao types
     * @return  {string[]}
     */
    static get types() {
        return ['user', 'role', 'image', 'product', 'category', 'cart'];
    }

    /**
     * get dao
     * @param   {'user'|'role'|'image'|'product'|'category'|'cart'}  type  dao type
     * @return  {Promise<Dao>}
     */
    static async createDao(type) {
        if (!type || typeof type !== 'string' || !DaoFactory.types.includes(type)) {
            return null;
        }

        if (type === 'image') {
            return new ImageDao();
        }

        // create database connection 
        const client = await Database.instance.createClient();

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
        }

        return null;
    }
}

module.exports = { DaoFactory };