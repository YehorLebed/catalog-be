const { Role } = require('../models/User');
const { User } = require('../models/User');

class UserBuilder {

    constructor() {
        this.user = new User();
    }

    /**
     * start building user model
     * @return  {UserBuilder}
     */
    static Build() {
        return new UserBuilder();
    }

    /**
     * add property to user object
     * @param   {string}        name   property name
     * @param   {any}           value  property value
     * @return  {UserBuilder}
     */
    addProperty(name, value) {
        if (this.user.hasOwnProperty(name)) {
            this.user[name] = value;
        }
        return this;
    }

    /**
     * add user id
     * @param   {number}     id  user id
     * @return  {UserBuilder}
     */
    addId(id) {
        this.user.id = id;
        return this;
    }

    /**
     * add user email
     * @param   {string}      email  user email
     * @return  {UserBuilder}
     */
    addEmail(email) {
        this.user.email = email;
        return this;
    }

    /**
     * add user password
     * @param   {string}      password  user password
     * @return  {UserBuilder}
     */
    addPassword(password) {
        this.user.password = password;
        return this;
    }

    /**
     * add user role
     * @param   {Role}      role  user role
     * @return  {UserBuilder}
     */
    addRole(role) {
        this.user.role = role;
        return this;
    }

    /**
     * build user model
     * @return  {User}
     */
    build() {
        return this.user;
    }

    /**
     * reset user model
     * @return  {UserBuilder}
     */
    reset() {
        this.user = new User();
        return this;
    }

    /**
     * set user
     * @param   {[type]}      user
     * @return  {UserBuilder}
     */
    setUser(user) {
        this.user = user;
        return this;
    }

    /**
     * getter for user
     * @return  {User}
     */
    get user() {
        return this._user;
    }

    /**
     * setter for user
     * @param {User} user user
     */
    set user(user) {
        this._user = user;
    }
}

module.exports = { UserBuilder };
