const { Router } = require('express');
const { ControllerFactory } = require('../../factories');

const router = new Router();

router.post('/:id/images/', async (req, res, next) => {
    const controller = await ControllerFactory.createImageController();
    return controller.save(req, res, next);
});

module.exports = { adminImageRouter: router };