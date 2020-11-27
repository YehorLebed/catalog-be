const { Model } = require('../core/Model');
const { Rule } = require('../helpers/validator/Rule');

class Role extends Model {
    /**
     * Role constructor
     * @param   {number}  id    role id
     * @param   {string}  name  role name
     */
    constructor(id, name) {
        super();
        this.id = id;
        this.name = name;
    }

    /**
     * getter for table name
     * @return  {string}
     */
    static get tableName() {
        return 'roles';
    }

    /**
     * getter for attributes
     * @return  {string[]}
     */
    static get attributes() {
        return ['name'];
    }

    static get rules() {
        return {
            id: new Rule({
                type: 'integer',
                required: false,
                min: 0,
            }),
            name: new Rule({
                type: 'string',
                required: true,
                minlength: 3,
                maxlength: 50
            }),
        }
    }
}

module.exports = { Role };