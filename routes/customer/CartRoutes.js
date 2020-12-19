const { Router } = require('express');
const { ControllerFactory } = require('../../factories');
const { Authorization } = require('../../middlewares/Authorization');

const router = new Router();

router.get('/carts',
    [
        Authorization.authorizeAdmin
    ],
    async (req, res, next) => {
        const controller = await ControllerFactory.createCartController();
        return controller.getAll(req, res, next);
    });

router.get('/carts/:userId', async (req, res, next) => {
    const controller = await ControllerFactory.createCartController();
    return controller.getByUserId(req, res, next);
})

router.put('/carts/:userId', async (req, res, next) => {
    const controller = await ControllerFactory.createCartController();
    return controller.update(req, res, next);
});

router.delete('/carts/:userId', async (req, res, next) => {
    const controller = await ControllerFactory.createCartController();
    return controller.delete(req, res, next);
});

module.exports = { cartRouter: router };
