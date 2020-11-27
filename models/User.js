const { Rule } = require('../helpers/validator/Rule');
const { Model } = require('../core/Model');
const { Role } = require('./');

class User extends Model {
    /**
     * User constructor
     * @param   {number|null}  id        user id
     * @param   {string|null}  email     user email
     * @param   {string|null}  password  user password
     * @param   {number}       role_id    user role
     */
    constructor(id, email, password, role_id) {
        super();
        this.id = id;
        this.email = email;
        this.password = password;
        this.role_id = role_id;
        this.role = new Role(role_id, null);
    }

    /**
     * setter for role
     * @param   {Role}  v  user role
     */
    set role(v) {
        this._role = v;
    }

    /**
     * setter for role
     * @return   {Role}  v  user role
     */
    get role() {
        return this._role;
    }

    /**
     * getter for table name
     * @return  {string}
     */
    static get tableName() {
        return 'users';
    }

    /**
     * getter for attributes
     * @return  {string[]}
     */
    static get attributes() {
        return ['email', 'password', 'role_id'];
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
            role_id: new Rule({
                type: 'integer',
                required: true,
                min: 0,
            }),
        }
    }
}

module.exports = { User };