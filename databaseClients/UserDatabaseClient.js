const { Client } = require('pg');
const { User } = require('../models');
const { DatabaseClient } = require('../core/DatabaseClient');
const { ServerError } = require('../helpers/ErrorHelper/customErrors');

class UserDatabaseClient extends DatabaseClient {
    /**
     * UserDatabaseClient constructor
     * @param   {Client}  client  client connection
     */
    constructor(client) {
        super(client);
    }

    /**
     * get role by name
     * @param   {[type]}  name  role name
     * @return  {{id: number, name: string}}
     */
    getRoleByName(name) {
        const sql = `select id, name from roles where name = $1`;
        const values = [name];

        let data = null;
        try {
            const result = this.client.query(sql, values);
            data = result.rows[0];
        }
        catch (error) {
            throw new ServerError('Failed to get role by name from database');
        }
        return data;
    }

    /**
     * get user with role by email
     * @param   {string}  email
     * @returns {{id: number, email: string, password: string, 
     *            role_id: number, role_name: string
     * }}
     */
    async getUserWithRoleByEmail(email) {
        const sql = `
            select u.id, u.email, u.password, r.id as role_id, r.name as role_name
            from users u
            right join roles r on (u.role_id = r.id)
            where u.email = $1
            limit 1;
        `;
        const values = [email];

        let data = null;
        try {
            const result = this.client.query(sql, values);
            data = result.rows[0];
        }
        catch (error) {
            throw new ServerError('Failed to get user by email from database');
        }
        return data;
    }

    /**
     * create user in database
     * @param   {User}  user  user
     * @return  {number} user id
     */
    async create(user) {
        const sql = `
            insert into users(email, password, role_id) 
            values ($1, $2, $3) 
            returning id;
        `
        const values = [user.email, user.password, user.role_id];

        let data = null;
        try {
            const result = this.client.query(sql, values);
            data = result.rows[0]['id'];
        }
        catch (error) {
            throw new ServerError('Failed to insert user into database');
        }
        return data;
    }
}

module.exports = { UserDatabaseClient };