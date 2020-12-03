const { Rule } = require('../utils/validator/Rule');
const { Model } = require('../core/Model');

class Role extends Model {
    /**
     * Role constructor
     * @param   {number}  id    role id
     * @param   {string}  name  role name
     */
    constructor(id = null, name = null) {
        super();
        this.id = id;
        this.name = name;
    }

    /**
     * get model as database schema representation
     * @return  {Object.<string, any>}
     */
    getAttributes() {
        return {
            'id': this.id,
            'name': this.name,
        };
    }

    /**
     * getter for tableName
     * @return  {string}
     */
    static get tableName() {
        return 'roles';
    }

    /**
     * getter for rules
     * @return  {Object.<string, Rule>}
     */
    static get rules() {
        return {
            id: new Rule({
                type: 'number',
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