const { Category } = require('../../models')

class CategoryDumpData {
    /**
     * category
     * @return  {Category[]}
     */
    static get itemsSync() {
        return [
            new Category(1, 'Electronics', null),
            new Category(2, 'Home', null),

            new Category(3, 'Notebooks', new Category(1)),
            new Category(4, 'Phones', new Category(1)),

            new Category(5, 'Chairs', new Category(2)),
            new Category(6, 'Beds', new Category(2)),
        ];
    }
}

module.exports = CategoryDumpData;