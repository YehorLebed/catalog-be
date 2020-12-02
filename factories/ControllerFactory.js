const { ServiceFactory } = require('./ServiceFactory');
const { UserController, ImageController } = require('../controllers');

class ControllerFactory {

    /**
     * allowed dao types
     * @return  {string[]}
     */
    static get types() {
        return ['user', 'image'];
    }

    /**
     * get controller
     * @param   {'user'|'image'}          type  controller type
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

}

module.exports = { ControllerFactory };