const { Dao } = require('../core/Dao');
const { UserDao, RoleDao } = require('../dao/index');
const { Database } = require('../core/Database');

class DaoFactory {

    /**
     * allowed dao types
     * @return  {string[]}
     */
    static get types() {
        return ['user', 'role'];
    }

    /**
     * get dao
     * @param   {string}  type  dao type
     * @return  {Promise<UserDao|RoleDao>}
     */
    static async createDao(type) {
        if (!type || typeof type !== 'string' || !DaoFactory.types.includes(type)) {
            return null;
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

        return null;
    }
}

module.exports = { DaoFactory };