const { User, Role } = require('../models');

class UserFactory {

    /**
     * create user instance
     * @param   {number|null}  id        user id
     * @param   {string|null}  email     user email
     * @param   {string|null}  password  user password
     * @param   {number}       role_id    user role
     * 
     * @returns {User}
     */
    createUser(id, email, password, role_id) {
        return new User(id, email, password, role_id);
    }

    /**
     * crete role instance
     * @param   {number}  id    role id
     * @param   {number}  name  role name
     * @return  {Role}
     */
    createRole(id, name) {
        return new Role(id, name);
    }

    /**
     * create user with role from data
     * @param   {{
     *      id:        number
     *      email      string
     *      password   string
     *      role_id    number
     *      role_name  string
     * }}  data  
     * @return  {User}
     */
    createUserWithRoleFromData(data) {
        const user = new User(data.id, data.email, data.password, data.role_id);
        const role = new Role(data.role_id, data.role_name);
        user.role = role;
        return user;
    }
}

module.exports = { UserFactory };