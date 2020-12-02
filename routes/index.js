const { Router } = require('express');
const { imageRouter } = require('./ImageRoutes');
const { productRouter } = require('./ProductRoutes');
const { authenticationRouter } = require('./AuthenticationRoutes');

const router = new Router();

router.use('/authentication', authenticationRouter);
router.use('/products', productRouter);

module.exports = { router };