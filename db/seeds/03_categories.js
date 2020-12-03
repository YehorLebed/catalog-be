const { Category } = require('../../models');
const { RenderSeed } = require('../utils/RenderSeed');

const items = [
    new Category(null, 'Electronics', null),
    new Category(null, 'Home', null),

    new Category(null, 'Notebooks', new Category(1)),
    new Category(null, 'Phones', new Category(1)),

    new Category(null, 'Chairs', new Category(2)),
    new Category(null, 'Beds', new Category(2)),
].map(category => category.getAttributes());

module.exports.seed = function (knex) {
    return RenderSeed.render(knex, Category.tableName, Object.keys(items[0]), items);
}