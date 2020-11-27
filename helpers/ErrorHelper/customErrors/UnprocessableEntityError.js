const { AppError } = require('./AppError');

class UnprocessableEntityError extends AppError {

    /**
     * UnprocessableEntityError constructor
     * @param   {string|string[]}  messages error messages
     */
    constructor(messages = 'Failed to process resource: Unprocessable entity provided.') {
        super(422, messages);
    }
}

module.exports = { UnprocessableEntityError };