const moment = require('moment');
const { Rule } = require('../utils/validator/Rule');
const { Image } = require('../models/Image');
const { Product, ProductView } = require('../models');
const { ProductBuilder } = require('../builder/ProductBuilder');
const { ProductDao, ImageDao, CategoryDao, } = require('../dao');
const { UnprocessableEntityError, BadRequestError } = require('../utils/ErrorHelper/customErrors');
const { Validator } = require('../utils/validator/Validator');

class ProductService {

    static GET_BY_CATEGORY_ID = 1;
    static GET_RECENTLY_VIEWED = 2;
    static GET_RECENTLY_ADDED = 3;
    static GET_POPULAR = 4;
    static GET_RECOMMENDED = 5;
    static GET_BY_SEARCH = 6;

    /**
     * @typedef {Object} GetParameters
     * @property {number} page       page
     * @property {number} amount     amount
     * @property {number} [minPrice]   min price
     * @property {number} [maxPrice]   max price
     * @property {string} [search]     search string
     * @property {number} [categoryId] category id
     */

    /**
     * ProductService constructor
     * @param   {ProductDao}   productDao product dao
     * @param   {ImageDao}     imageDao   image dao
     * @param   {CategoryDao}  categoryDao   category dao
     */
    constructor(productDao, imageDao, categoryDao, productViewDao) {
        this.productDao = productDao;
        this.imageDao = imageDao;
        this.categoryDao = categoryDao;
        this.productViewDao = productViewDao;
    }


    /**
     * define type of get query
     * @param   {GetParameters}  params  params
     * @return  {number}
     */
    defineGetQueryType(params) {
        if (params.search)
            return ProductService.GET_BY_SEARCH;

        if (params.categoryId)
            return ProductService.GET_BY_CATEGORY_ID;

        if (params.isRecentlyAdded && params.isRecentlyAdded !== 'false')
            return ProductService.GET_RECENTLY_ADDED;

        if (params.isPopular && params.isPopular !== 'false')
            return ProductService.GET_POPULAR;

        if (params.isRecommended && params.isRecommended !== 'false')
            return ProductService.GET_RECOMMENDED;
    }

    /**
     * fetch all products by params
     * @typedef {Object} Params
     * @property {number} page       page
     * @property {number} amount     amount
     * @property {number} [minPrice]   min price
     * @property {number} [maxPrice]   max price
     * @property {string} [search]     search string
     * @property {number} [categoryId] category id
     * @param  {Params} params
     * @returns {Promise<Product[]>}
     */
    async getAll(params) {
        const validation = Validator.validate(params, {
            page: new Rule({ required: true }),
            amount: new Rule({ required: true }),
            orderBy: new Rule({
                required: false,
                allowed: Product.attributes
            })
        });

        if (!validation.isValid) {
            throw new BadRequestError(validation.errors);
        }

        // fetch products by category id
        const queryType = this.defineGetQueryType(params);

        if (queryType === ProductService.GET_BY_SEARCH) {
            return this.productDao.getBySearch(params);
        }

        if (queryType === ProductService.GET_BY_CATEGORY_ID) {
            const categoryId = params.categoryId;
            return this.productDao.getProductsByCategoryIdAndParams(categoryId, params);
        }

        if (queryType === ProductService.GET_RECENTLY_ADDED) {
            return this.productDao.getRecentlyAddedProducts(params);
        }

        if (queryType === ProductService.GET_POPULAR) {
            return this.productDao.getPopularProducts(params);
        }

        if (queryType === ProductService.GET_RECOMMENDED) {
            return this.productDao.getRecomendedProducts(params);
        }
    }

    /**
     * getr product by id
     * @param   {number}  id  product id
     * @return  {Promise<Product>}
     */
    async getById(id) {
        return this.productDao.getById(id);
    }

    /**
     * create Product
     * @typedef {Object} ProductData
     * @property {string}   title title
     * @property {string}   description description
     * @property {number}   price price
     * @property {boolean}  isPromo isPromo
     * @property {{small: string, medium: string, original: string}}    image image
     * @property {{id: number}} category category
     * @param {ProductData} data
     * @return  {Promise<Product>}
     */
    async create(data) {
        const validation = Validator.validate(data, Product.rules);
        if (!validation.isValid) {
            throw new UnprocessableEntityError(validation.errors);
        }

        const hasImages = !!(data.image &&
            data.image.small &&
            data.image.medium &&
            data.image.original);

        const categoryExists = await this.categoryDao.getById(data.category.id);
        if (!categoryExists) {
            throw new UnprocessableEntityError('Provided category does not exists');
        }

        return this.productDao.create(
            ProductBuilder.Build()
                .setProduct(data)
                .addImage(hasImages ? data.image : new Image())
                .addCreatedAt(moment().unix())
                .build()
        );
    }


    /**
     * update category
     * @param   {number}    id category
     * @param   {Product}  category category
     * @return  {Promise<Product>}
     */
    async update(id, product) {
        const validation = Validator.validate(product, Product.rules)
        if (!validation.isValid) {
            throw new UnprocessableEntityError(validation.errors);
        }

        const productExists = await this.productDao.getById(id);
        if (!productExists) {
            throw new UnprocessableEntityError('Failed to update: product does not exists')
        }

        await this.productDao.update(product);

        return product;
    }

    /**
     * add product view
     * @param   {User}  user  user instance
     * @param   {Product}  product  product view
     * @return  {Promise<void>}
     */
    async addViewToProduct(user, product) {
        const productViewExists = await this.productViewDao
            .getByUserIdAndProductId(user.id, product.id);

        // increase number of views if product
        if (productViewExists) {
            productViewExists.quantity++;
            await this.productViewDao.update(productViewExists);
            return;
        }

        // create product view if not exists
        const productView = new ProductView(user.id, product.id, 1);
        await this.productViewDao.create(productView);
    }

    /**
     * get product views for user
     * @param   {User}    user    user
     * @param   {number}  amount  amount
     * @return  {Promise<Product[]>}
     */
    async getMostViewedProductByUser(user) {
        return this.productDao.getMostViewedProductByUserId(user.id);
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