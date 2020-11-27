const { User } = require('../models');

class UserFactory {

    /**
     * create user instance
     * @param   {number|null}  id        user id
     * @param   {string|null}  email     user email
     * @param   {string|null}  password  user password
     * @param   {number}       roleId    user role
     * 
     * @returns {User}
     */
    create(id, email, password, roleId) {
        return new User(id, email, password, roleId);
    }
}

module.exports = { UserFactory };