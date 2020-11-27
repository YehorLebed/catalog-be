const { User, Role } = require('../models');
const { UserFactory } = require('../factories/UserFactory');
const { UserDatabaseClient } = require('../databaseClients/UserDatabaseClient');

class UserRepository {

    /**
     * UserRepository constructor
     * @param   {UserFactory}         factory         
     * @param   {UserDatabaseClient}  databaseClient  
     */
    constructor(factory, databaseClient) {
        this.factory = factory;
        this.databaseClient = databaseClient;
    }

    /**
     * get user and role from the databse
     * @param   {string}  email  user email
     * @return  {User}
     */
    async getUserByEmail(email) {
        const data = await this.databaseClient.getUserWithRoleByEmail(email);
        const user = this.factory.createUserWithRoleFromData(data);
        return user;
    }

    /**
     * create user instance in db
     * @param   {{email: string, password: string}}  data
     * @return  {User}
     */
    async createCustomer({ email, password }) {
        // get customer role id from database
        const fetchedRole = await this.databaseClient.getRoleByName('customer');
        const role = this.factory.createRole(fetchedRole.id, fetchedRole.name);

        // create user instance in database
        const user = this.factory.createUser(null, email, password, role.id);
        const id = await this.databaseClient.create(user);

        // add data to user
        user.id = id;
        user.role = role;

        return user;
    }
}

module.exports = { UserRepository };