const { Category } = require('../../models');
const { RenderSeed } = require('../utils/RenderSeed');
const CategoryDumpData = require('../data/CategoryDumpData');

const items = CategoryDumpData.itemsSync.map(category => category.getAttributes());

module.exports.seed = function (knex) {
    return RenderSeed.render(knex, Category.tableName, Object.keys(items[0]), items);
}