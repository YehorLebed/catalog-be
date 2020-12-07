const { User } = require('../models');
const { UserBuilder, RoleBuilder } = require('../builder');
const { UserDao, RoleDao } = require('../dao');
const { HashHelper } = require('../utils/HashHelper');
const { TokenHelper } = require('../utils/TokenHelper');
const { Validator } = require('../utils/validator/Validator');
const { UnprocessableEntityError } = require('../utils/ErrorHelper/customErrors');

class UserService {

    /**
     * UserService constructor
     * @param   {UserDao}  userDao  user dao
     * @param   {RoleDao}  roleDao  role dao
     */
    constructor(userDao, roleDao) {
        this.userDao = userDao;
        this.roleDao = roleDao;
    }

    /**
     * getter fro userDao
     * @return  {UserDao}
     */
    get userDao() {
        return this._userDao;
    }

    /**
     * setter for userDao
     * @param   {UserDao}  userDao userDao
     */
    set userDao(userDao) {
        if (userDao instanceof UserDao) {
            this._userDao = userDao;
        }
    }

    /**
 * getter fro roleDao
 * @return  {RoleDao}
 */
    get roleDao() {
        return this._roleDao;
    }

    /**
     * setter for roleDao
     * @param   {RoleDao}  roleDao roleDao
     */
    set roleDao(roleDao) {
        if (roleDao instanceof RoleDao) {
            this._roleDao = roleDao;
        }
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
        const userExists = await this.userDao.getByProperty('email', data.email);
        if (userExists) {
            throw new UnprocessableEntityError(`User with email ${data.email} exists`);
        }

        // hash password and save
        const hashedPassword = await HashHelper.hashPassword(data.password);
        // get customer role instance
        const customerRole = await this.roleDao.getByProperty('name', 'customer');

        // create user instance
        return this.userDao.create(UserBuilder.Build()
            .addEmail(data.email)
            .addPassword(hashedPassword)
            .addRole(customerRole)
            .build());
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
        const user = await this.userDao.getByProperty('email', data.email);
        if (!user || !(await HashHelper.compare(data.password, user.password))) {
            throw new UnprocessableEntityError(`Email or password is invalid`);
        }

        // generate jwt token
        return TokenHelper.generateUserToken(user);
    }

    /**
     * decode token
     * 
     * @param   {Request}  req  req
     *
     * @return  {Promise<User>}
     */
    async authorize(req) {
        if (!req.headers.authorization) {
            throw new AuthorizationError(['Not Auhtorized']);
        }

        const token = req.headers.authorization.split(' ')[1];
        const data = await TokenHelper.decodeToken(token);

        if (!data) return null;

        return UserBuilder.Build()
            .addId(data.id)
            .addEmail(data.email)
            .addRole(data.role)
            .build();
    }

    /**
     * authorize admin
     * @param   {User}  user  user
     * @return  {Prmise<void>}  has permission
     */
    async authorizeAdmin(user) {
        if (!user) {
            throw new AuthorizationError(['Not Auhtorized']);
        }
        if (user.role.name !== 'admin') {
            throw new PermissionError('Permission denied');
        }
    }
}

module.exports = { UserService };