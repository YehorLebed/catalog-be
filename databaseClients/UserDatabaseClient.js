const { Client } = require('pg');
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

    async getUserWithRoleByLogin(login) {
        const sql = ``;
        const values = [login];

        let data = null;
        try {
            const result = this.client.query(sql, values);
            data = result.rows[0];
        }
        catch (error) {
            throw new ServerError('Failed to get user by login from database');
        }
        return data;
    }
}

module.exports = { UserDatabaseClient };