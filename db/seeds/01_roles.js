const { Role } = require('../../models');
const RoleDumpData = require('../data/RoleDumpData');
const { RenderSeed } = require('../utils/RenderSeed');

const items = RoleDumpData.itemsSync.map(role => role.getAttributes());

module.exports.seed = function (knex) {
    return RenderSeed.render(knex, Role.tableName, Object.keys(items[0]), items);
}