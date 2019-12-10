const generes = require ('../../enum/genres'),
    academy_type = require ('../../enum/academic_type'),
    getParams = require ('../../helpers/getParams'),
    validateRequire = require ('../../Validations/require');

module.exports = (req, res, next) => {
    let params = getParams(req),
        errors = validateRequire (params, [
            {key: 'title', max_length: 50, min_length: 1}, 
            {key: 'genere', max_length: 50, min_length: 1},
            {key: 'is_premium', max_length: 1, min_length: 1},
            {key: 'academy_type', max_length: 50, min_length: 1},
            {key: 'academy_standard', max_length: 2, min_length: 1},
            {key: 'fields', max_length: 2000, min_length: null},
        ]);

    // velidate Genre
    if (!Object.keys(errors).length && !generes.includes ((params.genere).toLowerCase()))
        errors['genere'] = 'generes must be one from: ' + generes.join(', ');

    // velidate Gener
    if (!Object.keys(errors).length && ![1,0].includes ( parseInt (params.is_premium)))
        errors['is_premium'] = 'Is-premium must be one from 0,1.';

    // velidate academy_type
    if (!Object.keys(errors).length && !academy_type.includes ((params.academy_type).toLowerCase()))
        errors['academy_type'] = 'academy-type must be one from: ' + academy_type.join(', ');

    // velidate academy_standard
    if (!Object.keys(errors).length && parseInt (params.academy_standard) > 12)
        errors['academy_standard'] = 'Academy-standard can not be more than 12!';

    if (Object.keys(errors).length)
        return res.send (422, {status: false, message: 'Parameters Errors!', data: errors});

    return next();
}