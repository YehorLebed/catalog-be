const { Router } = require('express');
const { authenticationRouter } = require('./AuthenticationRoutes');
const { categoryRouter } = require('./CategoryRoutes');
const { productRouter } = require('./ProductRoutes');

const router = new Router();

router.use('/authentication', authenticationRouter);

router.use('/categories', categoryRouter);

router.use('/products/', productRouter);

module.exports.guestRouter = router;