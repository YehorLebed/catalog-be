const fs = require('fs');
const { PathLike } = require('fs')

class FsHelper {

    /**
     * read directory
     * @param   {PathLike}  path  directory path
     * @return  {Promise<string[]>}
     */
    static readDir(path) {
        return new Promise((resolve, reject) => {
            fs.readdir(path, (error, files) => {
                if (error) reject(error);
                else resolve(files);
            });
        });
    }

    /**
     * create directory 
     * @param   {PathLike}  path  directory path
     * @return  {Promise<void>}
     */
    static createDir(path) {
        return new Promise((resolve, reject) => {
            fs.mkdir(path, error => {
                if (error) reject(error);
                else resolve();
            });
        });
    }

    /**
     * check if directory exists
     * @param   {PathLike}  path  directory path
     * @return  {Promise<boolean>}
     */
    static dirExists(path) {
        return new Promise((resolve) => {
            fs.access(path, error => {
                if (error) resolve(false);
                else resolve(true)
            })
        });
    }

    /**
     * delete directory
     * @param   {PathLike}  path  directory path
     * @return  {Promise<void>}
     */
    static deleteDir(path) {
        return new Promise((resolve, reject) => {
            fs.rmdir(path, error => {
                if (error) reject(error);
                resolve();
            });
        });
    }

    /**
     * delete file
     * @param   {[type]}  path  file path
     * @return  {Promise<void>}
     */
    static deleteFile(path) {
        return new Promise((resolve, reject) => {
            fs.unlink(path, error => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
}

module.exports = { FsHelper };