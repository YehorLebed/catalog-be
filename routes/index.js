const { Router } = require('express');
const { authenticationRouter } = require('./AuthenticationRoutes');

const router = new Router();

router.use('/authentication', authenticationRouter);

module.exports = { router };