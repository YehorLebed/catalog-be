const { DaoFactory } = require('./DaoFactory');
const { UserService } = require('../services');

class ServiceFactory {

    /**
     * allowed dao types
     * @return  {string[]}
     */
    static get types() {
        return ['user'];
    }

    /**
     * create service
     * @param   {string}  type  dao type
     * @return  {Promise<UserService>}
     */
    static async createService(type) {
        if (!type || typeof type !== 'string' || !ServiceFactory.types.includes(type)) {
            return null;
        }

        // create dao
        if (type === 'user') {
            return new UserService(
                ...(await Promise.all([
                    DaoFactory.createDao('user'),
                    DaoFactory.createDao('role'),
                ]))
            );
        }

        return null;
    }
}

module.exports = { ServiceFactory };