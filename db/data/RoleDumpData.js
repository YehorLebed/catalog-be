const { Role } = require('../../models')

class RoleDumpData {
    /**
     * roles
     * @return  {Role[]}
     */
    static get itemsSync() {
        return [
            new Role(1, 'customer'),
            new Role(2, 'admin'),
        ];
    }
}

module.exports = RoleDumpData;