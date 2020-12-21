const path = require('path');
const { Image } = require('../models');
const { ImageDao } = require('../dao');
const { ImageBuilder } = require('../builder')
const { FsHelper } = require('../utils/FsHelper');
const { BadRequestError } = require('../utils/ErrorHelper/customErrors/BadRequestError');

class ImageService {

    /**
     * ImageService constructor
     * @param   {ImageDao}  imageDao  image dao
     * @param   {ImageDao}  productDao  image dao
     */
    constructor(imageDao, productDao) {
        this.imageDao = imageDao;
        this.productDao = productDao;
    }

    /**
     * save image
     * @param   {Request}  req  request
     * @return  {Promise<Image>}
     */
    async save(req) {
        const productId = req.params['id'];
        try {
            const image = await this.imageDao.save(req);
            this.productDao.updatePropertyById(productId, 'image', JSON.stringify(image));
        } catch (error) {
            await this.delete(productId);
            throw BadRequestError('Failed to save image');
        }
    }

    /**
     * delete images by product id
     * @param   {number}  productId
     * @return  {void}
     */
    async delete(productId) {
        await this.imageDao.delete(productId);
    }
}

module.exports = { ImageService };