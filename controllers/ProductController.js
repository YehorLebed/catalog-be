const { ErrorHelper } = require('../utils/ErrorHelper/ErrorHelper');
const { ProductService } = require('../services');

class ProductController {

    /**
     * ProductService constructor
     * @param   {ProductService}  productService  product service
     */
    constructor(productService, imageService) {
        this.productService = productService;
    }

    /**
     * get all products by query parameters
     * @param {Request}   req   request
     * @param {Response}  res   response
     * @param {Function}  next  next
     * @returns {Response}
     */
    async getAll(req, res, next) {
        try {
            const result = await this.productService.getAll();
            return res.status(200).json({ products: result });
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }

    /**
     * delete product instance
     * @param {Request}   req   request
     * @param {Response}  res   response
     * @param {Function}  next  next
     * @returns {Response}
     */
    async delete(req, res, next) {
        try {
            const id = +req.params.id
            await this.productService.delete(id);
            return res.sendStatus(200);
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }
}

module.exports = { ProductController };