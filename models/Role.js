const { Rule } = require('../helpers/validator/Rule');
const { RoleBuilder } = require('../builder');
const { Model } = require('../core/Model');

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
     * initiate user build
     * @return  {RoleBuilder}
     */
    static Build() {
        return RoleBuilder.Build();
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