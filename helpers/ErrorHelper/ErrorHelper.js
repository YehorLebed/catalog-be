const { AppError } = require('./customErrors');

class ErrorHelper {

    /**
     * ErrorHelper constructor
     * @param   {AppError}  error  error
     */
    constructor(error) {
        this._error = error;
    }

    /**
     * getter for error
     * @return  {AppError}
     */
    get error() {
        return this._error;
    }

    /**
     * process response
     * @param   {Response}  response  response
     * @return  {Response}
     */
    processResponse(response) {
        return response
            .status(this.error.status)
            .json({ errors: this.error.errors });
    }
}

module.exports = { ErrorHelper };