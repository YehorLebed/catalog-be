const path = require('path');
const multer = require('multer');
const { Image } = require('../models');
const { ImageService } = require('../services');
const { ErrorHelper } = require('../utils/ErrorHelper/ErrorHelper');

class ImageController {

    /**
     * ImageController constructor
     * @param   {ImageService}  imageService  image service
     */
    constructor(imageService) {
        this.imageService = imageService;
    }

    /**
     * save image 
     * @param   {Response}  req   request
     * @param   {Response}  res   response
     * @param   {Function}  next  next
     * @return  {Response}
     */
    async save(req, res, next) {
        try {
            const result = await this.imageService.save(req);
            return res.status(201).json(result);
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }
}

module.exports = { ImageController };