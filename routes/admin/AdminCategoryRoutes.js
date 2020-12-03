const { Router } = require('express');
const { ControllerFactory } = require('../../factories');

const router = new Router();

router.post('/', async (req, res, next) => {
    const controller = await ControllerFactory.createImageController();
    return controller.save(req, res, next);
});

router.put('/', async (req, res, next) => {
    const controller = await ControllerFactory.createImageController();
    return controller.save(req, res, next);
});

router.delete('/', async (req, res, next) => {
    const controller = await ControllerFactory.createImageController();
    return controller.save(req, res, next);
});

module.exports = { adminImageRouter: router };