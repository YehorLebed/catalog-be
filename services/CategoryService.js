const { CategoryDao } = require('../dao');
const { Category } = require('../models');
const { CategoryBuilder } = require('../builder')
const { Validator, ValidationResult } = require('../utils/validator/Validator')
const { UnprocessableEntityError, BadRequestError } = require('../utils/ErrorHelper/customErrors');

class CategoryService {

    /**
     * CategoryService constructor
     * @param   {CategoryDao}  categoryDao  category dao
     */
    constructor(categoryDao) {
        this.categoryDao = categoryDao;
    }

    /**
     * get all categories by params
     * @typedef {Object} CategoryParams
     * @property {number} page
     * @property {number} amount
     * @property {number} [parentId]
     * @param  {CategoryParams}  params
     * @return  {Promise<Category[]>}
     */
    async getAll(params) {
        const validation = Validator.validate(params, {
            page: new Rule({ required: true }),
            amount: new Rule({ required: true }),
        });

        if (!validation.isValid) {
            throw new BadRequestError(validation.errors);
        }
    }

    /**
     * get category by id
     * @param   {number}  id  category id
     * @return  {Promise<Category>}      [return description]
     */
    async getById(id) {
        return this.categoryDao.getById(id);
    }

    /**
     * create category
     * @param   {Category}  category category
     * @return  {Promise<Category>}
     */
    async create(category) {
        const validation = Validator.validate(category, Category.rules)
        if (!validation.isValid) {
            throw new UnprocessableEntityError(validation.errors);
        }

        let parent = null;

        if (category.parent) {
            parent = await this.categoryDao.getById(category.parent.id);
            if (!parent) {
                throw new UnprocessableEntityError('Failed to create: category parent does not exists')
            }
        }

        return this.categoryDao.create(
            CategoryBuilder.Build()
                .addTitle(category.title)
                .addParent(parent)
                .build()
        );
    }

    /**
     * update category
     * @param   {number}    id category
     * @param   {Category}  category category
     * @return  {Promise<Category>}
     */
    async update(id, category) {
        category.id = +id;
        const validation = Validator.validate(category, Category.rules)
        if (!validation.isValid) {
            throw new UnprocessableEntityError(validation.errors);
        }

        const categoryExists = await this.categoryDao.getById(id);
        if (!categoryExists) {
            throw new UnprocessableEntityError('Failed to update: category does not exists')
        }

        await this.categoryDao.update(category);

        return category;
    }

    /**
     * delete category
     * @param   {number}    id category
     * @return  {Promise<void>}
     */
    async delete(id) {
        const params = { page: 1, amount: 10, parentId: id };
        const subCategories = await this.categoryDao.getAll(params);

        if (subCategories.length !== 0) {
            throw new UnprocessableEntityError('Category you want to delete has subcategories');
        }

        await this.categoryDao.deleteById(id);
    }
}

module.exports = { CategoryService };