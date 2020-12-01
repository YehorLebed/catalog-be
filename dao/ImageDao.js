const { Client } = require('pg');
const { Image } = require('../models');
const { Dao } = require('../core/Dao');
const { ImageBuilder } = require('../builder');
const { ServerError } = require('../helpers/ErrorHelper/customErrors');

class ImageDao extends Dao {
    /**
     * UserDatabaseClient constructor
     * @param   {Client}  client  client connection
     */
    constructor(client) {
        super(client);
    }

    /**
     * get image by property and its value
     * @param   {number}    id category id
     * @return  {Promise<Image>}
     */
    async getById(id) {
        let image = null;

        const sql = `select id, title, path, size from images where id = $1 limit 1`;
        const values = [id];

        try {
            // fetch data
            const data = await this.client.query(sql, values);
            const res = data.rows[0];

            if (res) {
                // create image image
                image = ImageBuilder.Build()
                    .addId(res['id'])
                    .addTitle(res['title'])
                    .addPath(res['path'])
                    .addSize(res['size'])
                    .build();
            }
        }
        catch (error) {
            throw new ServerError(`Failed to get image by id from database`);
        }
        return image;
    }

    /**
     * get all images
     * @param   {number}  page    page number
     * @param   {number}  amount  amount number
     * @return  {Promise<Image[]>}
     */
    async getAll(page, amount) {
        const images = [];

        const sql = `select id, title, path, size from images limit $1 offset $2`;
        const offset = (page - 1) * amount;
        const values = [amount, offset];

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows;

            if (res.length !== 0) {
                res.forEach((row) => {
                    // create image image
                    const image = ImageBuilder.Build()
                        .addId(row['id'])
                        .addTitle(row['title'])
                        .addPath(row['path'])
                        .addSize(row['size'])
                        .build();

                    // add image to list
                    images.push(image);
                });
            }
        }
        catch (error) {
            throw new ServerError('Failed to get images from database');
        }
        return images;
    }

    /**
     * create image in database
     * @param   {Image}  image  image
     * @return  {Promise<Image>}
     */
    async create(image) {
        let createdImage = null;

        const sql = `insert into images(title, path, size) values($1, $2, $3) returning id;`
        const values = [image.title, image.path, image.size];

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows[0];

            // expand image with inserted image id
            createdImage = ImageBuilder.Build()
                .setImage(image)
                .addId(res['id'])
                .build();
        }
        catch (error) {
            throw new ServerError('Failed to create image in database');
        }
        return createdImage;
    }

    /**
     * update image by property
     * @param   {Image}           image   image
     * @param   {string}         name   property name
     * @param   {number|string}  value  property value
     * @returns {Promise<number|string>}
     */
    async updateProperty(image, name, value) {
        let updatedProperty = null

        const sql = `update images set ${name} = $1 where id = $2 returning ${name}`;
        const values = [value, image.id];

        try {
            const data = await this.client.query(sql, values);
            const res = data.rows[0];
            updatedProperty = res[name];
        }
        catch (error) {
            throw new ServerError(`Failed to update image property '${name}' in database`);
        }
        return updatedProperty;
    }

    /**
     * delete image by id
     * @param   {number}  id image id
     * @return  {Promise<void>}
     */
    async deleteById(id) {
        const sql = `delete from images where id = $1`;
        const values = [id];

        try {
            await this.client.query(sql, values);
        }
        catch (error) {
            throw new ServerError(`Failed to delete image with id '${id}' from database`);
        }
    }
}

module.exports = { ImageDao };