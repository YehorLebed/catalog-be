const { Role } = require('../../models');
const { RenderSeed } = require('../utils/RenderSeed');

const items = [
    new Role(null, 'customer'),
    new Role(null, 'admin'),
].map(role => role.getAttributes());

module.exports.seed = function (knex) {
    return RenderSeed.render(knex, Role.tableName, Object.keys(items[0]), items);
}