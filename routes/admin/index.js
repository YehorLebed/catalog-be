const { Router } = require('express');
const { productRouter } = require('./ProductRoutes');
const { categoryRouter } = require('./CategoryRoutes');

const router = new Router();

router.use('/products', productRouter);

router.use('/categories', categoryRouter);

module.exports.adminRouter = router;