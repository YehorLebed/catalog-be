const { AppError } = require('./AppError');

class BadRequestError extends AppError {

    /**
     * BadRequestError constructor
     * @param   {string|string[]}  messages       error messages
     */
    constructor(messages = 'Failed to process resource: Bad request.') {
        super(400, messages);
    }
}

module.exports = { BadRequestError };