const path = require('path');
const moment = require('moment');
const { Product, Category, Image } = require('../../models');
const { RenderSeed } = require('../utils/RenderSeed');

const items = [
    new Product(null,
        'Apple Macbook Air 2020',
        'Product description: soon...',
        35000,
        true,
        new Category(3),
        new Image(
            path.join(Image.DIR_FOR_CLIENT, '0', 'small.jpg'),
            path.join(Image.DIR_FOR_CLIENT, '0', 'medium.jpg'),
            path.join(Image.DIR_FOR_CLIENT, '0', 'original.jpg'),
        ),
        moment('20200815', 'YYYYMMDD').unix()
    ),
    new Product(null,
        'Apple Macbook Air 2019',
        'Product description: soon...',
        25000,
        false,
        new Category(1),
        new Image(
            path.join(Image.DIR_FOR_CLIENT, '0', 'small.jpg'),
            path.join(Image.DIR_FOR_CLIENT, '0', 'medium.jpg'),
            path.join(Image.DIR_FOR_CLIENT, '0', 'original.jpg'),
        ),
        moment('20190202', 'YYYYMMDD').unix()
    ),
    new Product(null,
        'Apple Iphone 12 Pro Max',
        'Product description: soon...',
        60000,
        true,
        new Category(4),
        new Image(
            path.join(Image.DIR_FOR_CLIENT, '0', 'small.jpg'),
            path.join(Image.DIR_FOR_CLIENT, '0', 'medium.jpg'),
            path.join(Image.DIR_FOR_CLIENT, '0', 'original.jpg'),
        ),
        moment('20201022', 'YYYYMMDD').unix()
    ),
    new Product(null,
        'Apple Iphone 6S Plus',
        'Product description: soon...',
        6000,
        true,
        new Category(4),
        new Image(
            path.join(Image.DIR_FOR_CLIENT, '0', 'small.jpg'),
            path.join(Image.DIR_FOR_CLIENT, '0', 'medium.jpg'),
            path.join(Image.DIR_FOR_CLIENT, '0', 'original.jpg'),
        ),
        moment('20170429', 'YYYYMMDD').unix()
    ),
    new Product(null,
        'The Rock',
        'Product description: soon...',
        999999,
        true,
        new Category(2),
        new Image(
            path.join(Image.DIR_FOR_CLIENT, '1', 'medium.jpg'),
            path.join(Image.DIR_FOR_CLIENT, '1', 'small.jpg'),
            path.join(Image.DIR_FOR_CLIENT, '1', 'original.jpg'),
        ),
        moment('20201010', 'YYYYMMDD').unix()
    ),
].map(product => product.getAttributes());

module.exports.seed = function (knex) {
    return RenderSeed.render(knex, Product.tableName, Object.keys(items[0]), items);
}