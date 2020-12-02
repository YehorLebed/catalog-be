const Jimp = require('jimp');
const path = require('path');
const { Image } = require('../models');
const { ImageBuilder } = require('../builder/ImageBuilder');
const { Multer } = require('../utils/Multer');
const { ServerError } = require('../utils/ErrorHelper/customErrors/ServerError');

class ImageDao {

    /**
     * ImageDao constructor
     */
    constructor() {
        this.multer = Multer.multer;
    }

    /**
     * save image
     * @param   {Request}  req  
     * @return  {Promise<Image>}
     */
    async save(req) {
        let image = null;

        try {
            const original = await this._saveUsingMulter(req);
            const small = await this._saveCustom(original, Image.SIZE_SMALL, 'small');
            const medium = await this._saveCustom(original, Image.SIZE_MEDIUM, 'medium');

            image = ImageBuilder.Build()
                .addPathToSmall(small)
                .addPathToMedium(medium)
                .addPathToOriginal(original)
                .build();
        }
        catch (error) {
            throw new ServerError('Failed to save image');
        }
        return image;
    }

    /**
     * save image using multer
     * @return  {Promise<string>}
     */
    async _saveUsingMulter(req) {
        return new Promise((resolve, reject) => {
            this.multer(req, null, error => {
                if (error) {
                    reject(error);
                } else {
                    // prepare image src
                    const id = req.params.id;
                    const imagePath = path.join(Image.DIR_FOR_CLIENT, id, 'original.jpg');
                    resolve(imagePath);
                }
            });
        })
    }

    /**
     * process image and save it
     * @param   {string}            original  path to original
     * @param   {number}            size      size of height and width
     * @param   {string}            name      size of height and width
     * @return  {Promise<string>}             image path from public directory
     */
    async _saveCustom(original, size, name) {
        // prepare image parameters
        // define image folder name (it is product id)
        const productId = path.dirname(original).split(path.sep).pop();
        // generate paths for image
        const serverImgPath = path.join(Image.DIR, productId, `${name}.jpg`);
        const clientImgPath = path.join(Image.DIR_FOR_CLIENT, productId, `${name}.jpg`);

        await Jimp.read(original).then(img => {
            const imgClone = img.clone();
            const imgBg = new Jimp(size, size, 'ffffff');

            if (img.getHeight() < img.getWidth()) {
                imgClone.resize(size, Jimp.AUTO);
                const y = Math.floor((size - imgClone.getHeight()) / 2);
                imgBg.blit(imgClone, 0, y);
            } else {
                imgClone.resize(Jimp.AUTO, size);
                const x = Math.floor((size - imgClone.getWidth()) / 2);
                imgBg.blit(imgClone, x, 0);
            }
            imgBg.writeAsync(serverImgPath);
        });

        return clientImgPath;
    }

}

module.exports = { ImageDao };