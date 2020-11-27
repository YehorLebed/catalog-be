const path = require('path');
const { Config } = require('./helpers/Config');

// setup configuration
const config = new Config();
config.load();

module.exports = {
  client: 'pg',
  connection: {
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
  },
  migrations: {
    directory: path.join(__dirname, 'db', 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'db', 'seeds')
  }
}
