const { DaoFactory } = require('./DaoFactory');
const { UserService, ImageService, ProductService } = require('../services');

class ServiceFactory {

    /**
     * allowed dao types
     * @return  {string[]}
     */
    static get types() {
        return ['user', 'image', 'product'];
    }

    /**
     * create service
     * @param   {'image'|'product'|'user'}  type  dao type
     * @return  {Promise<UserService|ImageService|ProductService>}
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
        else if (type === 'image') {
            return new ImageService(
                await DaoFactory.createDao('image')
            );
        }
        else if (type === 'product') {
            return new ProductService(
                ...(await Promise.all([
                    DaoFactory.createDao('product'),
                    DaoFactory.createDao('image'),
                ]))
            );
        }

        return null;
    }
}

module.exports = { ServiceFactory };