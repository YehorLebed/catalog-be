const { Router } = require('express');
const { ControllerFactory } = require('../../factories');

const router = new Router();

router.get('/', async (req, res, next) => {
    const controller = await ControllerFactory.createCategoryController()
    return controller.getAll(req, res, next);
});

router.get('/:id', async (req, res, next) => {
    const controller = await ControllerFactory.createCategoryController();
    return controller.getById(req, res, next);
});

module.exports = { categoryRouter: router };