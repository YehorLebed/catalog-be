const { ErrorHelper } = require('../utils/ErrorHelper/ErrorHelper');
const { CategoryService } = require('../services');

class CategoryController {

    /**
     * CategoryService constructor
     * @param   {CategoryService}  categoryService  category service
     */
    constructor(categoryService) {
        this.categoryService = categoryService;
    }

    /**
     * get all categorys by query parameters
     * @param {Request}   req   request
     * @param {Response}  res   response
     * @param {Function}  next  next
     * @returns {Response}
     */
    async getAll(req, res, next) {
        try {
            const params = req.query;
            const result = await this.categoryService.getAll(params);
            return res.status(200).json({ categorys: result });
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }

    /**
     * get category by id
     * @param {Request}   req   request
     * @param {Response}  res   response
     * @param {Function}  next  next
     * @returns {Response}
     */
    async getById(req, res, next) {
        try {
            const id = +req.params.id;
            const result = await this.categoryService.getById(id);
            return res.status(200).json(result);
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }

    /**
     * create category
     * @param {Request}   req   request
     * @param {Response}  res   response
     * @param {Function}  next  next
     * @returns {Response}
     */
    async create(req, res, next) {
        try {
            const data = req.body;
            const result = await this.categoryService.create(data);
            return res.status(200).json(result);
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }

    /**
     * update category
     * @param {Request}   req   request
     * @param {Response}  res   response
     * @param {Function}  next  next
     * @returns {Response}
     */
    async update(req, res, next) {
        try {
            const id = +req.params.id;
            const data = req.body;
            const result = await this.categoryService.update(id, data);
            return res.status(200).json(result);
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }

    /**
     * delete category instance
     * @param {Request}   req   request
     * @param {Response}  res   response
     * @param {Function}  next  next
     * @returns {Response}
     */
    async delete(req, res, next) {
        try {
            const id = +req.params.id
            await this.categoryService.delete(id);
            return res.sendStatus(200);
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }
}

module.exports = { CategoryController };