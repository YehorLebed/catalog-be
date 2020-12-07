const { Router } = require('express');
const { AuthorizationMiddleware } = require('../middlewares/Authorization');

const router = new Router();

router.get('/user', [AuthorizationMiddleware.authorize], (req, res) => {
    return res.status(200).json({ user: req.user });
});

router.get('/admin', [
    AuthorizationMiddleware.authorize,
    AuthorizationMiddleware.authorizeAdmin
], (req, res) => {
    return res.status(200).json({ user: req.user });
});

module.exports = { testRouter: router };