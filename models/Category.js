const { Model } = require('../core/Model');
const { Rule } = require('../helpers/validation/Rule');

class Category extends Model {
    /**
     * Category constructor
     * @param   {number}  id        category id
     * @param   {string}  title     category title
     * @param   {number}  parentId  parent category id
     */
    constructor(id, name, parentId) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
    }

    static get tableName() {
        return 'categories';
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