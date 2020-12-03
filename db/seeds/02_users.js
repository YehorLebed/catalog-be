const { User, Role } = require('../../models');
const { RenderSeed } = require('../utils/RenderSeed');
const { HashHelper } = require('../../utils/HashHelper');

const prepareUsers = async () => [
    new User(null, 'ivan@gmail.com', await HashHelper.hashPassword('ivan'), new Role(1)),
    new User(null, 'mykola@gmail.com', await HashHelper.hashPassword('mykola'), new Role(1)),
    new User(null, 'alex@gmail.com', await HashHelper.hashPassword('alex'), new Role(1)),
    new User(null, 'admin@gmail.com', await HashHelper.hashPassword('admin'), new Role(1)),
].map(user => user.getAttributes());

module.exports.seed = async function (knex) {
    const items = await prepareUsers();
    return RenderSeed.render(knex, User.tableName, Object.keys(items[0]), items);
}