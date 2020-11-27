const { Model } = require('../core/Model');
const { Rule } = require('../helpers/validator/Rule');

class Image extends Model {
    /**
     * Image constructor
     * @param   {number}  id     image id
     * @param   {string}  title  image title
     * @param   {string}  path   image path
     * @param   {string}  size   image size
     */
    constructor(id, title, path, size) {
        super();
        this.id = id;
        this.title = title;
        this.path = path;
        this.size = size;
    }

    /**
     * getter for table name
     * @return  {string}
     */
    static get tableName() {
        return 'images';
    }

    /**
     * getter for attributes
     * @return  {string[]}
     */
    static get attributes() {
        return ['title', 'path', 'size'];
    }

    static get rules() {
        return {
            id: new Rule({
                type: 'integer',
                required: false,
                min: 0,
            }),
            title: new Rule({
                type: 'string',
                required: true,
                minlength: 3,
                maxlength: 255,
            }),
            path: new Rule({
                type: 'string',
                required: true,
                minlength: 3,
                maxlength: 255,
            }),
            size: new Rule({
                type: 'string',
                required: true,
                allowed: ['small', 'medium', 'original']
            }),
        }
    }
}

module.exports = { Image }