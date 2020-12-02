const path = require('path');
const multer = require('multer');
const { Image } = require('../models');

class Multer {

    /**
     * getter for configuration multer storage
     * @return  {multer.StorageEngine}
     */
    static get _multerStorage() {
        return multer.diskStorage({
            destination: function (req, file, cb) {
                const id = req.params.id;
                const savePath = path.join(Image.DIR, id);
                cb(null, savePath);
            },
            filename: function (req, file, cb) {
                cb(null, Image.DEFAULT_NAME)
            },
        })
    }

    /**
     * getter for multer limits
     * @return  {{fileSize: number}}
     */
    static get _multerLimits() {
        return { fileSize: Image.MAX_SIZE }
    }

    /**
     * getter for multer Filter config
     *
     * @param   {[type]}  req   [req description]
     * @param   {[type]}  file  [file description]
     * @param   {[type]}  cb    [cb description]
     *
     * @return  {[type]}        [return description]
     */
    static _multerFilter(req, file, cb) {
        const extention = path.extname(file.originalname).toLowerCase();
        const mimetype = file.mimetype;

        const isMimetypeValid = Image.TYPES_REGEX.test(mimetype);
        const isExtentionValid = Image.TYPES_REGEX.test(extention);

        if (isMimetypeValid && isExtentionValid) {
            return cb(null, true);
        }

        cb(`Failed to upload files: not allwed formats are provided`);
    }

    static get multer() {
        return multer({
            storage: ImageDao._multerStorage,
            limits: ImageDao._multerLimits,
            fileFilter: ImageDao._multerFilter
        }).single('image');
    }
}

module.exports = { Multer };