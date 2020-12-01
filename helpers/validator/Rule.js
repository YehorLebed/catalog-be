class Rule {

    /**
     * regular expression to validate email
     */
    static patternEmail = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

    static types = ['string', 'number', 'boolean', 'integer'];

    /**
     * Rule description
     * @param {{
     *      required:  boolean
     *      allowed:   any
     *      minlength: number
     *      maxlength: number
     *      pattern:   RegExp
     *      type:      string
     *      min:       number
     *      max:       number
     * }} rule rule parameters
     */
    constructor({ type, required, min, max, minlength, maxlength, allowed, pattern }) {
        required !== undefined && (this.required = required);
        minlength !== undefined && (this.minlength = minlength);
        maxlength !== undefined && (this.maxlength = maxlength);
        allowed !== undefined && (this.allowed = allowed);
        pattern !== undefined && (this.pattern = pattern);
        type !== undefined && (this.type = type);
        min !== undefined && (this.min = min);
        max !== undefined && (this.max = max);
    }

    /**
     * setter for allowed
     * @param   {string[]}  v  allowed
     */
    set allowed(v) {
        if (!Array.isArray(v)) {
            throw new TypeError(`Invalid 'allowed' rule provided`);
        }
        this._allowed = v;
    }

    /**
     * setter for type
     * @param   {string}  v  type
     */
    set type(v) {
        if (typeof v !== 'string' || !Rule.types.includes(v)) {
            throw new TypeError(`Invalid 'type' rule provided`);
        }
        this._type = v;
    }

    /**
     * setter for pattern
     * @param   {string}  v  pattern
     */
    set pattern(v) {
        if (!(v instanceof RegExp)) {
            throw new TypeError(`Invalid 'pattern' rule provided`);
        }
        this._pattern = v;
    }

    /**
     * setter for required
     * @param   {boolean}  v  required
     */
    set required(v) {
        if (typeof v !== 'boolean') {
            throw new TypeError(`Invalid 'required' rule provided`);
        }
        this._required = v;
    }

    /**
     * setter for minlength
     * @param   {number}  v  value
     */
    set minlength(v) {
        Rule.validateNumberRule('minlength', v)
        this._minlength = v;
    }

    /**
     * setter for maxlength
     * @param   {number}  v  value
     */
    set maxlength(v) {
        Rule.validateNumberRule('maxlength', v)
        this._maxlength = v;
    }

    /**
     * setter for min
     * @param   {number}  v  value
     */
    set min(v) {
        Rule.validateNumberRule('min', v)
        this._min = v;
    }

    /**
     * setter for max
     * @param   {number}  v  value
     */
    set max(v) {
        Rule.validateNumberRule('max', v)
        this._max = v;
    }

    /**
     * validate number rule provided
     * @param   {string}  name   rule name
     * @param   {number}  value  rule value
     */
    static validateNumberRule(name, value) {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new TypeError(`Invalid '${name}' rule provided`);
        }
    }

    get required() {
        return this._required;
    }

    get minlength() {
        return this._minlength;
    }

    get maxlength() {
        return this._maxlength;
    }

    get allowed() {
        return this._allowed;
    }

    get type() {
        return this._type;
    }

    get min() {
        return this._min;
    }

    get max() {
        return this._max;
    }

    get pattern() {
        return this._pattern;
    }
}

module.exports = { Rule };
