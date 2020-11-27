class AppError {
    /**
     * getter for available status codes
     * @return  {number[]}
     */
    static get statusCodes() { return [400, 401, 403, 404, 422, 500] };

    /**
     * AppError constructor
     * @param   {number}    status        status code
     * @param   {string[]}  errors        errors
     */
    constructor(status, errors) {
        this.status = status;
        this.errors = errors;
    }

    /**
     * setter for status
     * @param   {number}  status  status code
     */
    set status(status) {
        if (!AppError.statusCodes.includes(status)) {
            throw new TypeError(`Invalid status code provided: ${status}`);
        }
        this._status = status
    }

    /**
     * setter for errors
     * @param   {string[]}  errors  errors array
     */
    set errors(errors) {
        if (Array.isArray(errors) && errors.length !== 0) {
            this._errors = errors;
        }
        else if (typeof errors === 'string') {
            this._errors = [errors];
        }
        else {
            throw new TypeError(`Invalid errors type provided: ${typeof errors}`);
        }
    }

    /**
     * getter for status
     * @return  {number}
     */
    get status() {
        return this._status;
    }

    /**
     * getter for errors
     * @return  {string[]}
     */
    get errors() {
        return this._errors;
    }
}

module.exports = { AppError };