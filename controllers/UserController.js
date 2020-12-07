const { ErrorHelper } = require('../utils/ErrorHelper/ErrorHelper');
const { UserService } = require('../services');
const { PermissionError } = require('../utils/ErrorHelper/customErrors/PermissionError');

class UserController {

    /**
     * UserController constructor
     * @param   {UserService}  userService  user service
     */
    constructor(userService) {
        this.userService = userService;
    }

    /**
     * process registration route
     * @param   {Request}   req   request
     * @param   {Response}  res   request
     * @param   {Function}  next  next
     * @return  {Response}
     */
    async registration(req, res, next) {
        try {
            const data = req.body;
            const result = await this.userService.create(data);
            return res.status(201).json(result)
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }

    /**
     * process registration route
     * @param   {Request}   req   request
     * @param   {Response}  res   request
     * @param   {Function}  next  next
     * @return  {Response}
     */
    async login(req, res, next) {
        try {
            const data = req.body;
            const result = await this.userService.login(data);
            return res.status(200).json({ token: result });
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }

    /**
     * process authorization
     * @param   {Request}   req   request
     * @param   {Response}  res   request
     * @param   {Function}  next  next
     * @return  {Response}
     */
    async authorize(req, res, next) {
        try {
            await this.userService.authorize(req);
            return next();
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }

    /**
     * authorize admin
     * @param   {Request}   req   request
     * @param   {Response}  res   request
     * @param   {Function}  next  next
     * @return  {Response}
     */
    async authorizeAdmin(req, res, next) {
        try {
            await this.userService.authorizeAdmin(req.user);
            return next();
        }
        catch (error) {
            const errorHelper = new ErrorHelper(error);
            return errorHelper.processResponse(res);
        }
    }
}

module.exports = { UserController };