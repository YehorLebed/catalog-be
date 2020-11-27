const { Model } = require('../core/Model');
const { Rule } = require('../helpers/validator/Rule');

class Category extends Model {
    /**
     * Category constructor
     * @param   {number}  id        category id
     * @param   {string}  title     category title
     * @param   {number}  parent_id  parent category id
     */
    constructor(id, name, parent_id) {
        super();
        this.id = id;
        this.name = name;
        this.parent_id = parent_id;
    }

    /**
     * getter for table name
     * @return  {string}
     */
    static get tableName() {
        return 'categories';
    }

    /**
     * getter for attributes
     * @return  {string[]}
     */
    static get attributes() {
        return ['name', 'parent_id']
    }

    static get rules() {
        return {
            id: new Rule({
                type: 'integer',
                required: false,
                min: 0,
            }),
            parent_id: new Rule({
                type: 'integer',
                required: false,
                min: 0,
            }),
            name: new Rule({
                type: 'string',
                required: true,
                minlength: 3,
                maxlength: 50,
            })
        }
    }
}

module.exports = { Category };