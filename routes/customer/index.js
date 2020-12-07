const { Router } = require('express');
const { cartRouter } = require('./CartRoutes');

const router = new Router();

router.use(cartRouter);

module.exports = { customerRouter: router };