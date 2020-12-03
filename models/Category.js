const { Model } = require('../core/Model');
const { Rule } = require('../utils/validator/Rule');

class Category extends Model {
    /**
     * Category constructor
     * @param   {number}    id              category id
     * @param   {string}    title           category title
     * @param   {Category}  parent  parent category id
     */
    constructor(id, title, parent) {
        super();
        this.id = id;
        this.title = title;
        this.parent = parent;
    }

    /**
     * getter for rules
     * @return  {Object.<string, Rule>}
     */
    static get rules() {
        return {
            id: new Rule({
                type: 'integer',
                required: false,
                min: 0,
            }),
            title: new Rule({
                type: 'string',
                required: true,
                minlength: 3,
                maxlength: 50,
            })
        }
    }
}

module.exports = { Category };