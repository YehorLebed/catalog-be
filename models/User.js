const { Model } = require('../core/Model');
const { Rule } = require('../helpers/validator/Rule');

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

    /**
 * setter for id
 * @param   {number}  v  value
 */
    set id(v) {
        this._id = v;
    }

    /**
     * setter for email
     * @param   {string}  v  value
     */
    set email(v) {
        this._email = v;
    }

    /**
     * setter for password
     * @param   {string}  v  value
     */
    set password(v) {
        this._password = v;
    }

    /**
     * setter for role_id
     * @param   {number}  v  value
     */
    set role_id(v) {
        this._role_id = v;
    }

    /**
     * getter for role
     * @return  {number}
     */
    get id() {
        return this._id;
    }

    /**
     * getter for email
     * @return  {string}
     */
    get email() {
        return this._email;
    }

    /**
     * getter for password
     * @return  {string}
     */
    get password() {
        return this._password;
    }

    /**
     * getter for role id
     * @return  {number}
     */
    get role_id() {
        return this._role_id;
    }
}

module.exports = { User };