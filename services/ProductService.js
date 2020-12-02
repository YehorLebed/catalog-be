const { ProductDao, ImageDao } = require('../dao');
const { Product } = require('../models');

class ProductService {
    /**
     * ProductService constructor
     * @param   {ProductDao} productDao product dao
     * @param   {ImageDao}   imageDao   image dao
     */
    constructor(productDao, imageDao) {
        this.productDao = productDao;
        this.imageDao = imageDao;
    }

    /**
     * 
     * @returns {Promise<Product[]>}
     */
    async getAll() {
        return this.productDao.getAll();
    }

    /**
     * delete product
     * @param   {number} productId product id
     * @return  {Promise<void>}
     */
    async delete(productId) {
        await this.imageDao.delete(productId);
    }
}

module.exports = { ProductService };