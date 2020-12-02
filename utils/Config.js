const dotenv = require('dotenv');

class Config {

    /**
     * Config constructor
     */
    constructor() {
        this.db = {
            username: null,
            database: null,
            password: null,
        };
        this.app = {
            port: null,
            host: null,
        };
    }

    /**
     * load .env variables
     */
    load() {
        dotenv.config();

        this.db.username = process.env['PG_USERNAME'];
        this.db.database = process.env['PG_DATABASE'];
        this.db.password = process.env['PG_PASSWORD'];

        this.app.port = process.env['PORT'];
        this.app.host = process.env['HOST'];
    }
}

module.exports = { Config }