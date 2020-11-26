class Model {

    /**
     * getter for table name
     * @return  {string}  table name in database
     */
    static get tableName() {
        throw new TypeError(`'tableName' is abstract and should be implemented in child classes.`);
    }

    /**
     * getter for validation rules
     * @return  {object}  validation rules
     */
    static get rules() {
        throw new TypeError(`'rules' is abstract and should be implemented in child classes.`);
    }

    /**
     * Model constructor
     */
    constructor() {
        if (this.constructor === Model) {
            throw new TypeError(`'Model' class is abstract.`);
        }
    }
}

module.exports = { Model };