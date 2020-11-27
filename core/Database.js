const { Client } = require('pg');
const { ServerError } = require('../helpers/ErrorHelper/customErrors');

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
     * create postgres client object
     * @return  {Client}
     */
    _getClient() {
        return new Client({
            user: this._username,
            database: this._database,
            password: this._password
        });
    }

    /**
     * create connection to db
     * @return  {Client}
     */
    async getConnection() {
        try {
            const connection = this._getClient();
            await connection.connect();
            return connection;
        }
        catch (error) {
            throw new ServerError('Failed to connect to database.');
        }
    }
}

module.exports = { Database };