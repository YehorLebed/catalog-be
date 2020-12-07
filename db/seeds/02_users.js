const { User } = require('../../models');
const { RenderSeed } = require('../utils/RenderSeed');
const UserDumpData = require('../data/UserDumpData');

const prepareUsers = async () => (await UserDumpData.getItemsAsync()).map(user => user.getAttributes());

module.exports.seed = async function (knex) {
    const items = await prepareUsers();
    return RenderSeed.render(knex, User.tableName, Object.keys(items[0]), items);
}