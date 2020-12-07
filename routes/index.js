const { Router } = require('express');

const { adminRouter } = require('./admin');
const { guestRouter } = require('./guest');
const { customerRouter } = require('./customer');

const { Authorization } = require('../middlewares/Authorization');

const router = new Router();

router.use('/', guestRouter);

router.use(
    '/',
    [
        Authorization.authorize,
    ],
    customerRouter
);

router.use(
    '/admin',
    [
        Authorization.authorize,
        Authorization.authorizeAdmin,
    ],
    adminRouter
);

module.exports = { router };