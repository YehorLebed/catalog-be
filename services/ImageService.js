const path = require('path');
const { Image } = require('../models');
const { ImageDao } = require('../dao');
const { ImageBuilder } = require('../builder')
const { FsHelper } = require('../utils/FsHelper');

class ImageService {

    /**
     * ImageService constructor
     * @param   {ImageDao}  imageDao  image dao
     */
    constructor(imageDao) {
        this.imageDao = imageDao;
    }

    /**
     * save image
     * @param   {Request}  req  request
     * @return  {Promise<Image>}
     */
    save(req) {
        return this.imageDao.save(req);
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