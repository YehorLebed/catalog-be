const { Rule } = require('./Rule');

class ValidationResult {

    /**
     * ValidationResult constructor
     * @param   {string[]|null}  errors  array of errors
     */
    constructor(errors = null) {
        this._errors = errors;
        this._isValid = !errors || errors.length === 0;
    }

    /**
     * getter for valid value
     * @return  {boolean}
     */
    get isValid() {
        return this._isValid;
    }

    /**
     * getter for errors
     * @return  {string[] | null}
     */
    get errors() {
        return this._errors;
    }
}

class Validator {

    /**
     * 
     * @param {object} data 
     * @param {Object.<string, Rule>} modelRules 
     */
    static validate(data, modelRules) {
        if (!data || typeof data !== 'object') {
            return new ValidationResult(['Invalid data type provided']);
        }

        const errors = [];
        for (let property of modelRules) {
            // define property and its rule for validation
            const propValue = data[property];
            const propRule = modelRules[property];

            // required validation
            if (propRule.required !== undefined) {
                if (propRule.required && propValue == null) {
                    errors.push(Validator.messageRequired(property));
                    continue;
                }
            }

            // type validation
            if (propRule.type !== undefined) {
                if (
                    typeof propRule.type !== 'function' && typeof propValue !== propRule.type ||
                    typeof propRule.type === 'function' && !(propValue instanceof propRule.type)
                ) {
                    errors.push(Validator.messageInvalidType(property, propRule.type));
                    continue;
                }
            }

            // validate allowed values
            if (propRule.allowed !== undefined) {
                if (!propRule.allowed.includes(propValue)) {
                    errors.push(Validator.messageNotAllowed(property));
                    continue;
                }
            }

            // validate max value
            if (propRule.max !== undefined) {
                if (typeof propValue !== 'number' || isNaN(propValue)) {
                    errors.push(Validator.messageInvalidType(property, 'number'));
                    continue;
                }
                else if (propValue > propRule.max) {
                    errors.push(Validator.messageMax(property, propRule.max));
                    continue;
                }
            }

            // validate min value
            if (propRule.min !== undefined) {
                if (typeof propValue !== 'number' || isNaN(propValue)) {
                    errors.push(Validator.messageInvalidType(property, 'number'));
                    continue;
                }
                else if (propValue < propRule.min) {
                    errors.push(Validator.messageMin(property, propRule.min));
                    continue;
                }
            }

            // validate maxlength
            if (propRule.maxlength !== undefined) {
                if (typeof propValue !== 'string') {
                    errors.push(Validator.messageInvalidType(property, 'string'));
                    continue;
                }
                else if (propValue.length > propRule.maxlength) {
                    errors.push(Validator.messageReuiredLength(property, 'max', propRule.maxlength));
                    continue;
                }
            }

            // validate minlength
            if (propRule.minlength !== undefined) {
                if (typeof propValue !== 'string') {
                    errors.push(Validator.messageInvalidType(property, 'string'));
                    continue;
                }
                else if (propValue.length > propRule.minlength) {
                    errors.push(Validator.messageReuiredLength(property, 'min', propRule.minlength));
                    continue;
                }
            }
        }
        return new ValidationResult(errors);
    }

    /**
     * create message that field is required
     * @param   {string}  attr  attribute name
     * @return  {string}
     */
    static messageRequired(attr) {
        return `'${attr}' is required`;
    }

    /**
     * create message that field is invalid type
     * @param   {string}  attr           attribute name
     * @param   {string}  necessaryType  necessary type
     * @return  {string}
     */
    static messageInvalidType(attr, necessaryType) {
        return `'${attr}' type should be a ${necessaryType}`;
    }

    /**
     * [messageNotAllowed description]
     * @param   {string}  attr  attribute
     * @return  {string}
     */
    static messageNotAllowed(attr) {
        return `'${attr}' value is not allowed`;
    }

    /**
     * create message that field value more than allowed
     * @param   {string}  attr  attribute name
     * @param   {number}  max   max value
     * @return  {string}
     */
    static messageMax(attr, max) {
        return `'${attr}' maximum is ${max}`;
    }

    /**
     * create message that field value less than allowed
     * @param   {string}  attr  attribute name
     * @param   {number}  min   min value
     * @return  {string}
     */
    static messageMin(attr, min) {
        return `'${attr}' minimum is ${min}`;
    }

    /**
     * create message that field is required
     * @param   {string}       attr    attribute name
     * @param   {'min'|'max'}  rule    'min' or 'max'
     * @param   {number}       length  length
     * @return  {string}
     */
    static messageReuiredLength(attr, rule, length) {
        return `'${attr}' ${rule} length is ${length}`;
    }
}

module.exports = { Validator, ValidationResult };
