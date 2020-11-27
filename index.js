const { App } = require('./core/App');
const { Config } = require('./helpers/Config');

try {
    const config = new Config();
    config.load();

    const app = new App(config);
    app.applyMiddlewares();
    app.applyRoutes();
    app.run();
}
catch (error) {
    console.error(error);
    process.exit(1);
}