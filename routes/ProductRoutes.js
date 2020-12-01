const { Router } = require('express');
const { ControllerFactory } = require('../factories');

const router = new Router();

router.get('/', async (req, res, next) => {
    const controller = await ControllerFactory.createController('product');
    return controller.getAll(req, res, next);
});

router.get('/:id', async (req, res, next) => {
    const controller = await ControllerFactory.createController('product');
    return controller.getById(req, res, next);
});

router.post('/', async (req, res, next) => {
    const controller = await ControllerFactory.createController('product');
    return controller.create(req, res, next);
});

router.update('/:id', async (req, res, next) => {
    const controller = await ControllerFactory.createController('product');
    return controller.update(req, res, next);
});

router.delete('/:id', async (req, res, next) => {
    const controller = await ControllerFactory.createController('product');
    return controller.delete(req, res, next);
});


module.exports = { authenticationRouter: router };