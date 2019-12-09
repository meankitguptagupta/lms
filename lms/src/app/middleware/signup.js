let validateEmail = require ('../Validations/validateEmail'),
    validateContactNumber = require ('../Validations/validateContactNumber'),
    getParams = require ('../helpers/getParams'),
    validateRequire = require ('../Validations/require');

module.exports = (req, res, next) => {
    let params = getParams(req),
        errors = validateRequire (params, [
            {key: 'email', length: 191}, 
            {key: 'password', length: 191},
            {key: 'first_name', length: 50},
            {key: 'last_name', length: 50},
            {key: 'contact_number', length: 10},
        ]);
    
    /**
     * check if no error found
     * then validate Email
     */
    if(!Object.keys(errors).length && !validateEmail (params.valueOf().email))
        errors['email'] = 'Invalid Email!';

    /**
     * check if no error found
     * then validate Contact-Number
     */
    if (!Object.keys(errors).length && !validateContactNumber(params.valueOf().contact_number))
        errors['contact_number'] = 'Contact-Number Invalid!';

    if (Object.keys(errors).length)
        return res.send (422, {status: false, message: 'Parameters Errors!', data: errors});

    return next();
}