const { Rule } = require('../utils/validator/Rule');
const { Model } = require('../core/Model');
const { Role } = require('./');

class User extends Model {
    /**
     * User constructor
     * @param   {number}  id        user id
     * @param   {string}  email     user email
     * @param   {string}  password  user password
     * @param   {Role}    role      user role
     */
    constructor(id = null, email = null, password = null, role = null) {
        super();
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    /**
     * get model as database schema representation
     * @return  {Object.<string, any>}
     */
    getAttributes() {
        return {
            'id': this.id,
            'email': this.email,
            'password': this.password,
            'role_id': this.role.id
        }
    }

    /**
     * getter for tableName
     * @return  {string}
     */
    static get tableName() {
        return 'users';
    }

    /**
     * User validation rules
     * @return  {object}
     */
    static get rules() {
        return {
            id: new Rule({
                type: 'number',
                required: false,
                min: 0,
            }),
            email: new Rule({
                type: 'string',
                pattern: Rule.patternEmail,
                required: true,
                minlength: 3,
                maxlength: 255,
            }),
            password: new Rule({
                type: 'string',
                required: true,
                minlength: 3,
                maxlength: 255,
            })
        }
    }
}

module.exports = { User };
