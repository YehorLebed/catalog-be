const { Client } = require('pg');
const { ServerError } = require('../utils/ErrorHelper/customErrors');

class Database {
    static _instance = null;

    /**
     * setter for database instance
     * @param   {Database}  v  database instance
     */
    static set instance(v) {
        Database._instance = v;
    }

    /**
     * getter for databse instance
     * @return  {Database}
     */
    static get instance() {
        return Database._instance;
    }

    /**
     * Database constructor
     * @param   {{username: string, database: string, password: string}}  config  Database configuration
     */
    constructor(config) {
        if (Database.instance) {
            return Database.instance;
        }

        Database.instance = this;
        this._username = config.username;
        this._database = config.database;
        this._password = config.password;
    }

    /**
     * create connection to db and return client
     * @return  {Client}
     */
    async createClient() {
        try {
            const client = new Client({
                user: this._username,
                database: this._database,
                password: this._password
            });
            await client.connect();
            return client;
        }
        catch (error) {
            throw new ServerError('Failed to connect to database.');
        }
    }
}

module.exports = { Database };