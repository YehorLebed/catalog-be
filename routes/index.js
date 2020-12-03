const { Router } = require('express');

const { adminRouter } = require('./admin');
const { guestRouter } = require('./guest');

const router = new Router();

router.use('/admin', adminRouter);
router.use('/', guestRouter);

module.exports = { router };