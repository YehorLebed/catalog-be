const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { UnprocessableEntityError } = require('../helpers/ErrorHelper/customErrors');

class TokenHelper {
    static secret = 'wolf'

    constructor() {
        throw new TypeError('TokenHelper is static class');
    }

    /**
     * generate jwt token
     * @param  {User} user
     * @return {Promise<string>}
     */
    static generateUserToken(user) {
        return jwt.sign({ id: user.id, email: user.email }, TokenHelper.secret);
    }

    /**
     * decode jwt token
     * @param {string} token
     * @return {Promise<null|{id: number, email: string, role: string>}
     */
    static async decodeToken(token) {
        try {
            const decoded = await jwt.decode(token, TokenHelper.secret);
            return decoded;
        } catch (error) {
            throw new UnprocessableEntityError(['Failed to decode token']);
        }
    }
}

module.exports = { TokenHelper };