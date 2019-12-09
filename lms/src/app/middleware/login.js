let validateEmail = require ('../Validations/validateEmail'),
    getParams = require ('../helpers/getParams'),
    validateRequire = require ('../Validations/require');

module.exports = (req, res, next) => {
    let params = getParams(req),
        errors = validateRequire (params, [{key: 'email', max_length: 191, min_length: 1}, {key: 'password', max_length: 191, min_length: 1}]);

    /**
     * check if no error found
     * then validate Email
     */
    if (!Object.keys(errors).length && !validateEmail ( params.valueOf().email ))
        errors['email'] =  'Invalid Email!';
        

    if (Object.keys(errors).length)
        return res.send (422, {status: false, message: 'Parameters Errors!', data: errors});

    return next();
}