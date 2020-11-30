const { ServiceFactory } = require('./ServiceFactory');
const { UserController } = require('../controllers');

class ControllerFactory {

    /**
     * allowed dao types
     * @return  {string[]}
     */
    static get types() {
        return ['user'];
    }

    /**
     * get controller
     * @param   {string}          type  controller type
     * @return  {Promise<UserController>}
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

        return null;
    }
}

module.exports = { ControllerFactory };