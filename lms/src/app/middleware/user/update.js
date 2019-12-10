const getParams = require ('../../helpers/getParams'),
    validateRequire = require ('../../Validations/require'),
    validateContactNumber = require ('../../Validations/validateContactNumber');

module.exports = (req, res, next) => {
    let params = getParams(req),
        errors = validateRequire (params, [
            {key: 'first_name', max_length: 50, min_length: 1},
            {key: 'last_name', max_length: 50, min_length: 1}, 
            {key: 'contact_number', max_length: 10, min_length: 10},
            {key: 'address', max_length: 191, min_length: 1},
            {key: 'city', max_length: 50, min_length: 1},
            {key: 'pincode', max_length: 8, min_length: 1},
        ]);

    // velidate academy_standard
    if (!Object.keys(errors).length && !validateContactNumber (params.contact_number))
        errors['contact_number'] = 'Invalid Contact Number!';

    if (Object.keys(errors).length)
        return res.send (422, {status: false, message: 'Parameters Errors!', data: errors});

    return next();
}