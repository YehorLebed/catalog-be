const bcrypt = require('bcrypt');

/**
 * HashHelper class
 * @static
 */
class HashHelper {

    static saltRounds = 10;

    constructor() {
        throw new TypeError('HashHelper is static class');
    }

    /**
     * hash provided password
     * @param   {string}  password password to hash
     * @return  {Promise<string>}
     */
    static hashPassword(password) {
        return bcrypt.hash(password, HashHelper.saltRounds);
    }

    /**
     * compare password and hashed password
     * @param   {string}  password        password
     * @param   {string}  hashedPassword  hashed password
     * @return  {boolean}
     */
    static compare(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    }
}

module.exports = { HashHelper };