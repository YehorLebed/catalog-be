const { Validator } = require('../helpers/Validator');
const { UnprocessableEntityError } = require('../helpers/ErrorHelper/customErrors');
const { HashHelper } = require('../helpers/HashHelper');
const { TokenHelper } = require('../helpers/TokenHelper');
const { User } = require('../models');

class UserService {

    constructor(userRepository) {

    }

    async authorize(data) {
        const decoded = await TokenHelper.decodeToken(token);
        return data;
    }

    /**
     * create user instance
     * @param   {[type]}  data  [data description]
     * @return  {[type]}        [return description]
     */
    async create(data) {
        // validate data
        const validation = Validator.validate(data, User.rules);
        if (!validation.isValid) {
            throw new UnprocessableEntityError(validation.errors);
        }

        // check if user with the same login exists in database
        const userExists = await this.userRepository
    }

    async login(data)
}

module.exports = { UserService };