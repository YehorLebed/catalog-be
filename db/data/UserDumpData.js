const { User } = require('../../models');
const { HashHelper } = require('../../utils/HashHelper');
const RoleDumpData = require('./RoleDumpData');

class UserDumpData {
    /**
     * users with passwords
     * @return  {User[]}
     */
    static async getItemsAsync() {
        return [
            new User(1, 'ivan@gmail.com', await HashHelper.hashPassword('ivan'), RoleDumpData.itemsSync[0]),
            new User(2, 'mykola@gmail.com', await HashHelper.hashPassword('mykola'), RoleDumpData.itemsSync[0]),
            new User(3, 'alex@gmail.com', await HashHelper.hashPassword('alex'), RoleDumpData.itemsSync[0]),
            new User(4, 'admin@gmail.com', await HashHelper.hashPassword('admin'), RoleDumpData.itemsSync[1]),
        ];
    }

    /**
     * get users without passwords
     * @return  {User[]}
     */
    static get itemsSync() {
        return [
            new User(1, 'ivan@gmail.com', null, RoleDumpData.itemsSync[0]),
            new User(2, 'mykola@gmail.com', null, RoleDumpData.itemsSync[0]),
            new User(3, 'alex@gmail.com', null, RoleDumpData.itemsSync[0]),
            new User(4, 'admin@gmail.com', null, RoleDumpData.itemsSync[1]),
        ];
    }
}

module.exports = UserDumpData;