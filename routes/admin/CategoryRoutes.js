const { Router } = require('express');
const { ControllerFactory } = require('../../factories');

const router = new Router();

router.post('/', async (req, res, next) => {
    const controller = await ControllerFactory.createCategoryController();
    return controller.create(req, res, next);
});

router.put('/:id', async (req, res, next) => {
    const controller = await ControllerFactory.createCategoryController();
    return controller.update(req, res, next);
});

router.delete('/:id', async (req, res, next) => {
    const controller = await ControllerFactory.createCategoryController();
    return controller.delete(req, res, next);
});

module.exports = { categoryRouter: router };