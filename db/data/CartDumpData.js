const moment = require('moment');
const { User, Cart, CartProduct } = require('../../models');
const ProductDumpData = require('./ProductDumpData');

class CartDumpData {
    /**
     * cart
     * @return  {Cart[]}
     */
    static get itemsSync() {
        return [
            new Cart(1,
                new User(1),
                [
                    new CartProduct(ProductDumpData.itemsSync[0].id, 2, ProductDumpData.itemsSync[0].price),
                    new CartProduct(ProductDumpData.itemsSync[1].id, 1, ProductDumpData.itemsSync[1].price),
                ],
                moment().unix()
            ),
            new Cart(2,
                new User(2),
                [
                    new CartProduct(ProductDumpData.itemsSync[3].id, 5, ProductDumpData.itemsSync[3].price),
                    new CartProduct(ProductDumpData.itemsSync[1].id, 1, ProductDumpData.itemsSync[1].price),
                ],
                moment().unix()
            ),
            new Cart(3,
                new User(3),
                [
                    new CartProduct(ProductDumpData.itemsSync[0].id, 2, ProductDumpData.itemsSync[0].price),
                    new CartProduct(ProductDumpData.itemsSync[1].id, 1, ProductDumpData.itemsSync[1].price),
                ],
                moment().unix()
            ),
        ]
    }
}

module.exports = CartDumpData;