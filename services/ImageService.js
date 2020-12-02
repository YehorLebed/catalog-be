const path = require('path');
const { Image } = require('../models');
const { ImageDao } = require('../dao');
const { ImageBuilder } = require('../builder')
const { FsHelper } = require('../helpers/FsHelper');

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
}

module.exports = { ImageService };