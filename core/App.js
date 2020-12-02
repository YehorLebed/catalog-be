const express = require('express');
const { Database } = require('./Database');
const { Config } = require('../utils/Config');

class App {

    /**
     * App constructor
     * @param   {Config}  config  config object for app
     */
    constructor(config) {
        this.config = config;
        this.application = express();
        this.database = new Database(this.config.db);
    }

    /**
     * import and apply routes
     */
    applyRoutes() {
        this.application.use(require('../routes').router);
    }

    /**
     * import and apply middlewares
     */
    applyMiddlewares() {
        this.application.use(require('../middlewares').middlewares);
    }

    /**
     * run application
     */
    run() {
        const { port, host } = this.config.app;
        this.application.listen(port, host, () => {
            console.log(`Server listening on: http://${host}:${port}`);
        });
    }

    /**
     * setter for config
     * @param   {Config}  config  config object
     */
    set config(config) {
        this._config = config;
    }

    /**
     * getter for config
     * @return  {Config}
     */
    get config() {
        return this._config;
    }
}

module.exports = { App };