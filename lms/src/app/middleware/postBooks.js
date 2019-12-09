const generes = require ('../enum/genres'),
getParams = require ('../helpers/getParams'),
validateRequire = require ('../Validations/require');

module.exports = (req, res, next) => {
    let params = getParams(req),
        errors = validateRequire (params, [
            {key: 'tag_id', length: 10},
            {key: 'title', length: 50}, 
            {key: 'genere', length: 50},
            {key: 'is_premium', length: 1},
            {key: 'academy_type', length: 50},
            {key: 'academy_standard', length: null}
        ]);

    // velidate Genre
    if (!Object.keys(errors).length && !generes.includes ((params.genere).toLowerString()))
        errors['genere'] = 'generes must be one from: ', generes.join(', ');

    // velidate Gener
    if (!Object.keys(errors).length && ![1,0].includes (params.is_premium))
        errors['is_premium'] = 'Is-premium must be one from 0,1.';

    // velidate academy_type
    if (!Object.keys(errors).length && !academy_type.includes ((params.academy_type).toLowerString()))
        errors['academy_type'] = 'academy-type must be one from: ', academy_type.join(', ');

    // velidate academy_standard
    if (!Object.keys(errors).length && parseInt (params.academy_standard) > 12)
        errors['academy_standard'] = 'Academy-standard can not be more than 12!';

    if (Object.keys(errors).length)
        return res.send (422, {status: false, message: 'Parameters Errors!', data: errors});

    return next();
}