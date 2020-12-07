const { Cart } = require('../../models');
const { RenderSeed } = require('../utils/RenderSeed');
const CartDumpData = require('../data/CartDumpData')

const items = CartDumpData.itemsSync.map(cart => cart.getAttributes());

module.exports.seed = function (knex) {
    return RenderSeed.render(knex, Cart.tableName, Object.keys(items[0]), items);
}