const { User } = require('../models');
const { UserRepository } = require('../repositories');
const { Validator } = require('../helpers/Validator');
const { HashHelper } = require('../helpers/HashHelper');
const { TokenHelper } = require('../helpers/TokenHelper');
const { UnprocessableEntityError } = require('../helpers/ErrorHelper/customErrors');

class UserService {

    /**
     * UserService constructor
     * @param   {UserRepository}  userRepository  user repository
     */
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * create user instance
     * @param   {{email: string, password: string}}  data  data
     * @return  {User}
     */
    async create(data) {
        // validate data
        const validation = Validator.validate(data, User.rules);
        if (!validation.isValid) {
            throw new UnprocessableEntityError(validation.errors);
        }

        // check if user with the same email exists in database
        const userExists = await this.userRepository.getUserByEmail(data.email);
        if (userExists) {
            throw new UnprocessableEntityError(`User with email ${data.email} exists`);
        }

        // hash password and save
        data.password = await HashHelper.hashPassword(data.password);
        const created = await this.userRepository.createCustomer(data);
        return created;
    }

    /**
     * login user
     * @param   {{email: string, password: string}}  data  user data
     * @return  {string}
     */
    async login(data) {
        const validation = Validator.validate(data, User.rules);
        if (!validation.isValid) {
            throw new UnprocessableEntityError(validation.errors);
        }

        // check if user with the same email exists in database
        const user = await this.userRepository.getUserByEmail(data.email);
        if (!user || !(await HashHelper.compare(data.password, user.password))) {
            throw new UnprocessableEntityError(`Email or password is invalid`);
        }

        const token = await TokenHelper.generateUserToken(user);
        return token;
    }
}

module.exports = { UserService };