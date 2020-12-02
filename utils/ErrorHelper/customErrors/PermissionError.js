const { AppError } = require('./AppError');

class PermissionError extends AppError {

    /**
     * PermissionError constructor
     * @param   {string|string[]}  messages       error messages
     */
    constructor(messages = 'Failed to process resource: Have no permission.') {
        super(403, messages);
    }
}

module.exports = { PermissionError };