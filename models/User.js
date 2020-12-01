const { Rule } = require('../helpers/validator/Rule');
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
    constructor(id, email, password, role) {
        super();
        this.id = id || null;
        this.email = email || null;
        this.password = password || null;
        this.role = role || null;
    }

    /**
     * User validation rules
     * @return  {object}
     */
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
            })
        }
    }
}

module.exports = { User };
