const multer = require('multer');
const path = require('path');
const { ImageService } = require('../services');
const { Image } = require('../models');

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
     * @param   {Request}   res   response
     * @param   {Function}  next  next
     * @return  {Response}
     */
    async save(req, res, next) {
        try {
            const result = await this.imageService.save(req);
            req.image = result;
            return next();
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }
}