const { type } = require("os");

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

    constructor() {
        throw new Error('Model validator is static class');
    }

    /**
     * validate data
     * @param   {object}  data   data to validate
     * @param   {object}  rules  rules for validation
     * @return  {ValidationResult}
     */
    static validate(data, rules = null) {
        if (!rules) {
            return new ValidationResult(null);
        }
        if (!data || typeof data !== 'object') {
            return new ValidationResult([
                Validator.messageInvalidType('data', 'object')
            ]);
        }

        const errors = [];
        for (const attr in rules) {
            const value = data[attr];
            const valueRules = rules[attr];

            // IF REQUIRED
            if (valueRules.hasOwnProperty('required')) {
                if (valueRules.required && value === undefined) {
                    errors.push(Validator.messageRequired(attr));
                    continue;
                }
            }

            // IF MAX OR MIN
            if (valueRules.hasOwnProperty('max') || valueRules.hasOwnProperty('min')) {
                if (isNaN(value) || typeof value !== 'number') {
                    errors.push(Validator.messageInvalidType(attr, 'number'));
                    continue;
                }
                // MAX
                if (valueRules.hasOwnProperty('max') && value > valueRules.max) {
                    errors.push(Validator.messageMax(attr, valueRules.max));
                    continue;
                }
                // MIN
                if (valueRules.hasOwnProperty('min') && value < valueRules.min) {
                    errors.push(Validator.messageMin(attr, valueRules.min));
                    continue;
                }
            }

            // IF LENGTH
            if (valueRules.hasOwnProperty('maxLength') || valueRules.hasOwnProperty('minLength')) {
                if (typeof value !== 'string') {
                    errors.push(Validator.messageInvalidType(attr, 'string'));
                    continue;
                }
                // MAXLENGTH
                if (
                    valueRules.hasOwnProperty('maxLength') &&
                    value.length > valueRules.maxLength
                ) {
                    errors.push(Validator.messageReuiredLength(attr, 'max', valueRules.maxLength));
                    continue;
                }
                // MINLENGTH
                if (
                    valueRules.hasOwnProperty('minLength') &&
                    value.length < valueRules.minLength
                ) {
                    errors.push(Validator.messageReuiredLength(attr, 'min', valueRules.minLength));
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
