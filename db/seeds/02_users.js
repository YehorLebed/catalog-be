const { User } = require('../../models');
const { RenderSeed } = require('../utils/RenderSeed');
const { HashHelper } = require('../../helpers/HashHelper');

const items = [
    new User(1, 'ivan@gmail.com', await HashHelper.hashPassword('ivan'), 1),
    new User(2, 'mykola@gmail.com', await HashHelper.hashPassword('mykola'), 1),
    new User(3, 'alex@gmail.com', await HashHelper.hashPassword('alex'), 1),
    new User(4, 'admin@gmail.com', await HashHelper.hashPassword('admin'), 2),
];

module.exports.seed = function (knex) {
    return RenderSeed.render(knex, User.tableName, User.attributes, items);
}