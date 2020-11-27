const { User } = require('../../models');
const { RenderSeed } = require('../utils/RenderSeed');
const { HashHelper } = require('../../helpers/HashHelper');

const prepareUsers = async () => [
    new User(null, 'ivan@gmail.com', await HashHelper.hashPassword('ivan'), 1),
    new User(null, 'mykola@gmail.com', await HashHelper.hashPassword('mykola'), 1),
    new User(null, 'alex@gmail.com', await HashHelper.hashPassword('alex'), 1),
    new User(null, 'admin@gmail.com', await HashHelper.hashPassword('admin'), 2),
];

module.exports.seed = async function (knex) {
    const items = await prepareUsers();
    return RenderSeed.render(knex, User.tableName, User.attributes, items);
}