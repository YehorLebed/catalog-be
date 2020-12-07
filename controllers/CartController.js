const { ErrorHelper } = require('../utils/ErrorHelper/ErrorHelper');
const { CartService } = require('../services');

class CartController {

    /**
     * CartService constructor
     * @param   {CartService}  cartService  cart service
     */
    constructor(cartService) {
        this.cartService = cartService;
    }

    /**
     * get all carts by query parameters
     * @param {Request}   req   request
     * @param {Response}  res   response
     * @param {Function}  next  next
     * @returns {Response}
     */
    async getAll(req, res, next) {
        try {
            const params = req.query;
            const result = await this.cartService.getAll(params);
            return res.status(200).json({ carts: result });
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }

    /**
     * get cart by id
     * @param {Request}   req   request
     * @param {Response}  res   response
     * @param {Function}  next  next
     * @returns {Response}
     */
    async getByUserId(req, res, next) {
        try {
            const userId = req.user.role.name === 'admin'
                ? +req.params.id
                : req.user.id;

            const result = await this.cartService.getByUserId(userId);
            return res.status(200).json(result);
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }

    /**
     * create cart
     * @param {Request}   req   request
     * @param {Response}  res   response
     * @param {Function}  next  next
     * @returns {Response}
     */
    async create(req, res, next) {
        try {
            const data = req.body;
            if (req.user.role.name !== 'admin') {
                data.user = req.user;
            }

            const result = await this.cartService.create(data);
            return res.status(200).json(result);
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }

    /**
     * update cart
     * @param {Request}   req   request
     * @param {Response}  res   response
     * @param {Function}  next  next
     * @returns {Response}
     */
    async update(req, res, next) {
        try {
            const data = req.body;
            const userId = req.user.role.name === 'admin'
                ? +req.params.id
                : req.user.id;

            const result = await this.cartService.updateProducts(userId, data);
            return res.status(200).json(result);
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }

    /**
     * delete cart instance
     * @param {Request}   req   request
     * @param {Response}  res   response
     * @param {Function}  next  next
     * @returns {Response}
     */
    async delete(req, res, next) {
        try {
            const userId = req.user.role.name === 'admin'
                ? +req.params.id
                : req.user.id;

            await this.cartService.deleteByUserId(userId);
            return res.sendStatus(200);
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }
}

module.exports = { CartController };