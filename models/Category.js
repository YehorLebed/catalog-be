const { Model } = require('../core/Model');
const { Rule } = require('../helpers/validator/Rule');

class Category extends Model {
    /**
     * Category constructor
     * @param   {number}  id        category id
     * @param   {string}  title     category title
     * @param   {number}  parentId  parent category id
     */
    constructor(id, name, parentId) {
        super();
        this.id = id;
        this.name = name;
        this.parentId = parentId;
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
            parentId: new Rule({
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