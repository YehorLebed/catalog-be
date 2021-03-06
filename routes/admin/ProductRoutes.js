const { Router } = require('express');
const { imageRouter } = require('./ImageRoutes');
const { ControllerFactory } = require('../../factories');

const router = new Router();

router.post('/', async (req, res, next) => {
    const controller = await ControllerFactory.createProductController();
    return controller.create(req, res, next);
});

router.put('/:id', async (req, res, next) => {
    const controller = await ControllerFactory.createProductController();
    return controller.update(req, res, next);
});

router.delete('/:id', async (req, res, next) => {
    const controller = await ControllerFactory.createProductController();
    return controller.delete(req, res, next);
});

router.use(imageRouter);

module.exports = { productRouter: router };