const getParams = require ('../../helpers/getParams'),
    validateRequire = require ('../../Validations/require'),
    validateContactNumber = require ('../../Validations/validateContactNumber');

module.exports = (req, res, next) => {

    let params = getParams(req),
        errors = validateRequire (params, [
            {key: 'guardian_name', max_length: 50, min_length: 1},
            {key: 'guardian_contact_number', max_length: 10, min_length: 1}, 
            {key: 'academy_name', max_length: 191, min_length: 10},
            {key: 'academy_address', max_length: 191, min_length: 1},
            {key: 'academy_city', max_length: 50, min_length: 1},
            {key: 'academy_pincode', max_length: 8, min_length: 1},
            {key: 'academy_type', max_length: 10, min_length: 1},
            {key: 'academy_standard', max_length: 2, min_length: 1},
        ]);

    // velidate academy_standard
    if (!Object.keys(errors).length && !validateContactNumber (params.guardian_contact_number))
        errors['guardian_contact_number'] = 'Invalid Contact Number of Guardian!';

    if (Object.keys(errors).length)
        return res.send (422, {status: false, message: 'Parameters Errors!', data: errors});

    return next();
}