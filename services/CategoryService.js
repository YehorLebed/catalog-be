const { CategoryDao } = require('../dao');
const { Category } = require('../models');
const { CategoryBuilder } = require('../builder')
const { Validator, ValidationResult } = require('../utils/validator/Validator')
const { UnprocessableEntityError } = require('../utils/ErrorHelper/customErrors');

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
     * @param   {{}}  params
     * @return  {Promise<Category[]>}
     */
    async getAll(params) {
        return this.categoryDao.getAll(params)
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

        const parent = await this.categoryDao.getById(category.parent.id);
        if (!parent) {
            throw new UnprocessableEntityError('Failed to create: category parent does not exists')
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
        await this.categoryDao.deleteById(id);
    }
}

module.exports = { CategoryService };