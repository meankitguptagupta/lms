let validateEmail = require ('../Validations/validateEmail'),
    getParams = require ('../helpers/getParams'),
    validateRequire = require ('../Validations/require');

module.exports = (req, res, next) => {
    let params = getParams(req),
        errors = validateRequire (params, [{key: 'email', length: 191}, {key: 'password', length: 191}]);

    /**
     * check if no error found
     * then validate Email
     */
    if (!errors.length && !validateEmail ( params.valueOf().email ))
        errors.push('Invalid Email!');
        

    if (errors.length)
        return res.send (422, {status: false, message: 'Parameters Errors!', data: errors});

    return next();
}