const { Client } = require('pg');
const { Dao } = require('../core/Dao');
const { User, Role } = require('../models');
const { RoleBuilder, UserBuilder } = require('../builder')
const { ServerError } = require('../helpers/ErrorHelper/customErrors');

class UserDao extends Dao {
    /**
     * UserDatabaseClient constructor
     * @param   {Client}  client  client connection
     */
    constructor(client) {
        super(client);
    }

    /**
     * get user by property and its value
     * @param   {string}         name   attribute name
     * @param   {string|number}  value  attribute value
     * @return  {Promise<User>}
     */
    async getByProperty(name, value) {
        let user = null;

        const sql = `
        select u.id, u.email, u.password, r.id as role_id, r.name as role_name
        from users u join roles r on (u.role_id = r.id)
        where ${name} = $1 limit 1`;
        const values = [value];

        try {
            // fetch data
            const data = await this.client.query(sql, values);
            const res = data.rows[0];

            if (res) {
                // create user role
                const role = RoleBuilder.Build()
                    .addId(res['role_id'])
                    .addName(res['role_name'])
                    .build();

                // create user
                user = UserBuilder.Build()
                    .addId(res['id'])
                    .addEmail(res['email'])
                    .addPassword(res['password'])
                    .addRole(role)
                    .build();
            }
        }
        catch (error) {
            throw new ServerError(`Failed to get user by property '${name}' from database`);
        }
        return user;
    }

    /**
     * get all users
     * @param   {number}  page    page number
     * @param   {number}  amount  amount number
     * @return  {Promise<User[]>}
     */
    async getAll(page, amount) {
        const users = [];

        const sql = `
        select u.id, u.email, u.password, r.id as role_id, r.name as role_name
        from users u join roles r on (u.role_id = r.id)
        limit $1 offser $2`;
        const offset = (page - 1) * amount;
        const values = [amount, offset];

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows;

            if (res.length !== 0) {
                res.forEach(() => {
                    // create user role
                    const role = RoleBuilder.Build()
                        .addId(res['role_id'])
                        .addName(res['role_name'])
                        .build();

                    // create user
                    const user = UserBuilder.Build()
                        .addId(res['id'])
                        .addEmail(res['email'])
                        .addPassword(res['password'])
                        .addRole(role)
                        .build();

                    // add user to list
                    users.push(user);
                });
            }
        }
        catch (error) {
            throw new ServerError('Failed to get users from database');
        }
        return users;
    }

    /**
     * create user in database
     * @param   {User}  user  user
     * @return  {Promise<User>}
     */
    async create(user) {
        let createdUser = null;

        const sql = `
        insert into users(email, password, role_id) 
        values ($1, $2, $3) 
        returning id;`
        const values = [user.email, user.password, user.role.id];

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows[0];

            // expand user with inserted user id
            createdUser = UserBuilder.Build()
                .setUser(user)
                .addId(res['id'])
                .build();
        }
        catch (error) {
            throw new ServerError('Failed to create user in database');
        }
        return createdUser;
    }

    /**
     * update user by property
     * @param   {User}           user
     * @param   {string}         name   property name
     * @param   {number|string}  value  property value
     * @returns {Promise<number|string>}
     */
    async updateProperty(user, name, value) {
        let updatedProperty = null

        const sql = `update users set ${name} = $1 where id = $2 returning ${name}`;
        const values = [value, user.id];

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows[0];
            updatedProperty = res[name];
        }
        catch (error) {
            throw new ServerError(`Failed to update user property '${name}' in database`);
        }
        return updatedProperty;
    }

    /**
     * delete user by id
     * @param   {number}  id user id
     * @return  {Promise<void>}
     */
    async deleteById(id) {
        const sql = `delete from users where id = $1`;
        const values = [id];

        try {
            await this.client.query(sql, values);
        }
        catch (error) {
            throw new ServerError(`Failed to delete user with id '${id}' from database`);
        }
    }
}

module.exports = { UserDao };