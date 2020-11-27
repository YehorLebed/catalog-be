const { Role } = require('../../models');
const { RenderSeed } = require('../utils/RenderSeed');

const items = [
    new Role(null, 'customer'),
    new Role(null, 'admin'),
];

module.exports.seed = function (knex) {
    return RenderSeed.render(knex, Role.tableName, Role.attributes, items);
}