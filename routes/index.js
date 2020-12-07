const { Router } = require('express');

const { adminRouter } = require('./admin');
const { guestRouter } = require('./guest');
const { testRouter } = require('./testAuthorization');

const router = new Router();

router.use('/admin', adminRouter);
router.use('/', guestRouter);

router.use('/test', testRouter);

module.exports = { router };