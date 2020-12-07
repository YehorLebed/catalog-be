const { ControllerFactory } = require('../factories');

class Authorization {

    static async authorize(req, res, next) {
        const controller = await ControllerFactory.createUserController();
        return controller.authorize(req, res, next);
    }

    static async authorizeAdmin(req, res, next) {
        const controller = await ControllerFactory.createUserController();
        return controller.authorizeAdmin(req, res, next)
    }
}

module.exports = { Authorization };