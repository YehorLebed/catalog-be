const { AppError } = require('./AppError');

class ResourceNotFoundError extends AppError {

    /**
     * ResourceNotFoundError constructor
     * @param   {string|string[]}  messages error messages
     */
    constructor(messages = 'Failed to process resource: Not found') {
        super(404, messages);
    }
}

module.exports = { ResourceNotFoundError };