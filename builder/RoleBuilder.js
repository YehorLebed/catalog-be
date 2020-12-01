const { Role } = require('../models/Role');

class RoleBuilder {

    constructor() {
        this.role = new Role();
    }

    /**
     * start building role model
     * @return  {RoleBuilder}
     */
    static Build() {
        return new RoleBuilder();
    }

    /**
     * add property to user object
     * @param   {string}        name   property name
     * @param   {any}           value  property value
     * @return  {RoleBuilder}
     */
    addProperty(name, value) {
        if (this.role.hasOwnProperty(name)) {
            this.role[name] = value;
        }
        return this;
    }

    /**
     * add role id
     * @param   {number}     id  role id
     * @return  {RoleBuilder}
     */
    addId(id) {
        this.role.id = id;
        return this;
    }

    /**
     * add role name
     * @param   {string}      name  role name
     * @return  {RoleBuilder}
     */
    addName(name) {
        this.role.name = name;
        return this;
    }

    /**
     * build role model
     * @return  {Role}
     */
    build() {
        return this.role;
    }

    /**
     * reset role model
     * @return  {RoleBuilder}
     */
    reset() {
        this.role = new Role();
        return this;
    }

    /**
     * set role
     * @param   {[type]}      role
     * @return  {RoleBuilder}
     */
    setRole(role) {
        this.role = role;
        return this;
    }

    /**
     * getter for role
     * @return  {Role}
     */
    get role() {
        return this._role;
    }

    /**
     * setter for role
     * @param {Role} role role
     */
    set role(role) {
        this._role = role;
    }
}

module.exports = { RoleBuilder };
