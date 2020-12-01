const { Category } = require('../models/Category');

class CategoryBuilder {

    constructor() {
        this.category = new Category();
    }

    /**
     * start building category model
     * @return  {CategoryBuilder}
     */
    static Build() {
        return new CategoryBuilder();
    }

    /**
     * add property to user object
     * @param   {string}        name   property name
     * @param   {any}           value  property value
     * @return  {CategoryBuilder}
     */
    addProperty(name, value) {
        if (this.category.hasOwnProperty(name)) {
            this.category[name] = value;
        }
        return this;
    }

    /**
     * add category id
     * @param   {number}     id  category id
     * @return  {CategoryBuilder}
     */
    addId(id) {
        this.category.id = id;
        return this;
    }

    /**
     * add category title
     * @param   {number}     title  category title
     * @return  {CategoryBuilder}
     */
    addTitle(title) {
        this.category.title = title;
        return this;
    }

    /**
     * add category parent
     * @param   {number}     parent  category parent
     * @return  {CategoryBuilder}
     */
    addParent(parent) {
        this.category.parent = parent;
        return this;
    }

    /**
     * build category model
     * @return  {Category}
     */
    build() {
        return this.category;
    }

    /**
     * reset category model
     * @return  {CategoryBuilder}
     */
    reset() {
        this.category = new Category();
        return this;
    }

    /**
     * set category
     * @param   {[type]}      category
     * @return  {CategoryBuilder}
     */
    setCategory(category) {
        this.category = category;
        return this;
    }

    /**
     * getter for category
     * @return  {Category}
     */
    get category() {
        return this._category;
    }

    /**
     * setter for category
     * @param {Category} category category
     */
    set category(category) {
        this._category = category;
    }
}

module.exports = { CategoryBuilder };
