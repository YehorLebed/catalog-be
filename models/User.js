const { Model } = require('../core/Model');
const { Rule } = require('../helpers/validation/Rule');

class User extends Model {
    /**
     * User constructor
     * @param   {number|null}  id        user id
     * @param   {string|null}  email     user email
     * @param   {string|null}  password  user password
     * @param   {number}       roleId    user role
     */
    constructor(id, email, password, roleId) {
        super();
        this.id = id;
        this.email = email;
        this.password = password;
        this.roleId = roleId;
    }

    static get tableName() {
        return 'users';
    }

    static get attributes() {
        return ['email', 'password', 'roleId'];
    }

    static get rules() {
        return {
            id: new Rule({
                type: 'integer',
                required: false,
                min: 0,
            }),
            email: new Rule({
                type: 'string',
                required: true,
                minlength: 3,
                maxlength: 255,
            }),
            password: new Rule({
                type: 'string',
                required: true,
                minlength: 3,
                maxlength: 255,
            }),
            roleId: new Rule({
                type: 'integer',
                required: true,
                min: 0,
            }),
        }
    }
}

module.exports = { User };