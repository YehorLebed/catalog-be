const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { UnprocessableEntityError } = require('../utils/ErrorHelper/customErrors');

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
        const schema = {
            id: user.id,
            email: user.email,
            role: { name: user.role.name, },
        }
        return jwt.sign(schema, TokenHelper.secret);
    }

    /**
     * decode jwt token
     * @param {string} token
     * @return {Promise<{id: string, email: string, role:{name: string}}>}
     */
    static async decodeToken(token) {
        let data = null;
        try {
            data = await jwt.decode(token, TokenHelper.secret);
        } catch (error) {
            throw new UnprocessableEntityError(['Failed to decode token']);
        } finally {
            return data;
        }
    }
}

module.exports = { TokenHelper };