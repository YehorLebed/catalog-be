const { Router } = require('express');
const { ControllerFactory } = require('../factories');

const router = new Router();

router.post('/registration', async (req, res, next) => {
    const controller = await ControllerFactory.createController('user');
    return controller.registration(req, res, next);
});

router.post('/login', async (req, res, next) => {
    const controller = await ControllerFactory.createController('user');
    return controller.login(req, res, next);
});

module.exports = { authenticationRouter: router };