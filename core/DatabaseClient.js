const { Client } = require('pg');

class DatabaseClient {

    /**
     * DatabaseClient constructor
     * @param   {Client}  client  client
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * setter for client
     * @param   {Client}  client  client
     */
    set client(client) {
        this._client = client;
    }

    /**
     * getter for client
     * @return  {Client}
     */
    get client() {
        return this._client;
    }
}

module.exports = { DatabaseClient };