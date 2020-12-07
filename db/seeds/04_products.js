const { Product } = require('../../models');
const { RenderSeed } = require('../utils/RenderSeed');
const ProductDumpData = require('../data/ProductDumpData');

const items = ProductDumpData.itemsSync.map(product => product.getAttributes());

module.exports.seed = function (knex) {
    return RenderSeed.render(knex, Product.tableName, Object.keys(items[0]), items);
}
