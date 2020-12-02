const { AppError } = require('./AppError');

class ServerError extends AppError {

    /**
     * ServerError constructor
     * @param   {string|string[]}  messages  error messages
     */
    constructor(messages = 'Failed to process resource: Server error.') {
        super(500, messages);
    }
}

module.exports = { ServerError };