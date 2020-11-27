const { AppError } = require('./AppError');

class AuthorizationError extends AppError {

    /**
     * AuthorizationError constructor
     * @param   {string|string[]}  messages       error messages
     */
    constructor(messages = 'Failed to process resource: Not authorized.') {
        super(401, messages);
    }
}

module.exports = { AuthorizationError };