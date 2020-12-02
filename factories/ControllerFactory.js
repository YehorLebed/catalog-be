const { ServiceFactory } = require('./ServiceFactory');
const { UserController, ImageController, ProductController } = require('../controllers');

class ControllerFactory {

    /**
     * allowed dao types
     * @return  {string[]}
     */
    static get types() {
        return ['user', 'image', 'product'];
    }

    /**
     * get controller
     * @param   {'user'|'image'|'product'}          type  controller type
     * @return  {Promise<UserController|ImageController>}
     */
    static async createController(type) {
        if (!type || typeof type !== 'string' || !ControllerFactory.types.includes(type)) {
            return null;
        }

        // create controller
        if (type === 'user') {
            return new UserController(
                await ServiceFactory.createService('user')
            );
        }
        else if (type === 'image') {
            return new ImageController(
                await ServiceFactory.createService('image')
            );
        }
        else if (type === 'product') {
            return new ProductController(
                await ServiceFactory.createService('product')
            );
        }

        return null;
    }

    /**
     * create user controller
     * @return  {Promise<UserController>}
     */
    static createUserController() {
        return ControllerFactory.createController('user');
    }

    /**
     * create image controller
     * @return  {Promise<ImageController>}
     */
    static createImageController() {
        return ControllerFactory.createController('image');
    }

    /**
     * create product controller
     * @return  {Promise<ProductController>}
     */
    static createProductController() {
        return ControllerFactory.createController('product');
    }

}

module.exports = { ControllerFactory };