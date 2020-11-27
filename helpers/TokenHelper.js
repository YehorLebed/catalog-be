const jwt = require('jsonwebtoken');
const { UnprocessableDataError } = require("./errors/types/UnprocessableDataError");

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
        return jwt.sign({ id: user.id, login: user.data.login }, TokenHelper.secret);
    }

    /**
     * decode jwt token
     * @param {string} token
     * @return {Promise<null|{id: number, login: string, role: string>}
     */
    static async decodeToken(token) {
        try {
            const decoded = await jwt.decode(token, TokenHelper.secret);
            return decoded;
        } catch (error) {
            throw new UnprocessableDataError(['Failed to decode token']);
        }
    }
}

module.exports = { TokenHelper };