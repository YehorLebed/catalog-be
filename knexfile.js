const path = require('path');
const dotenv = require('dotenv');

// apply environment variables
dotenv.config();

module.exports = {
  client: 'pg',
  connection: {
    user: process.env['PG_USERNAME'],
    password: process.env['PG_PASSWORD'],
    database: process.env['PG_DATABASE']
  },
  migrations: {
    directory: path.join(__dirname, 'db', 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'db', 'seeds')
  }
}
