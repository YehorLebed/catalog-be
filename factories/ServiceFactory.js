const { DaoFactory } = require('./DaoFactory');
const { UserService, ImageService, ProductService, CategoryService, CartService } = require('../services');

class ServiceFactory {

    /**
     * allowed dao types
     * @return  {string[]}
     */
    static get types() {
        return ['user', 'image', 'product', 'category', 'cart'];
    }

    /**
     * create service
     * @param   {'image'|'product'|'user'|'category'|'cart'}  type  dao type
     * @return  {Promise<UserService|ImageService|ProductService|CategoryService>}
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
                    DaoFactory.createDao('category'),
                ]))
            );
        }
        else if (type === 'category') {
            return new CategoryService(
                await DaoFactory.createDao('category')
            );
        }
        else if (type === 'cart') {
            return new CartService(
                await DaoFactory.createDao('cart')
            );
        }

        return null;
    }
}

module.exports = { ServiceFactory };