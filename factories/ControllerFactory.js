const { UserController } = require('../controllers');
const { UserService } = require('../services');
const { UserRepository } = require('../repositories');
const { UserFactory } = require('./UserFactory');

const { DatabaseClient } = require('../core/DatabaseClient');
const { Database } = require('../core/Database');

class ControllerFactory {
    async static create(type) {
        if (type === 'User') {
            // create database client
            const client = await Database.instance.getConnection();
            const databaseClient = new DatabaseClient(client);
            //  create user factory
            const factory = new UserFactory();
            // create repository
            const repository = new UserRepository(factory, databaseClient);
            // create service
            const service = new UserService(repository);
            // create controller
            const controller = new UserController(service);
            return controller;
        }
    }
}

module.exports = { ControllerFactory };