const { ProductDao } = require('../dao');
const { Product } = require('../models');

class ProductService {
    /**
     * ProductService constructor
     * @param {ProductDao} productDao 
     */
    constructor(productDao) {
        this.productDao = productDao;
    }

    /**
     * 
     * @returns {Promise<Product[]>}
     */
    async getAll() {
        return this.productDao.getAll();
    }
}

module.exports = { ProductService };