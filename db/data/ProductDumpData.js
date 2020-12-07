const path = require('path');
const moment = require('moment');
const { Product, Category, Image } = require('../../models');

class ProductDumpData {
    /**
     * product
     * @return  {Product[]}
     */
    static get itemsSync() {
        return [
            new Product(1,
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
            new Product(2,
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
            new Product(3,
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
            new Product(4,
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
            new Product(5,
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
        ];
    }
}

module.exports = ProductDumpData;