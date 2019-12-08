const generes = require ('../enum/genres'),
getParams = require ('../helpers/getParams'),
validateRequire = require ('../Validations/require');

module.exports = (req, res, next) => {
    let params = getParams(req),
        errors = validateRequire (params, [
            {key: 'title', length: 50}, 
            {key: 'genere', length: 50},
            {key: 'is_premium', length: 1},
            {key: 'academy_type', length: 50},
            {key: 'academy_standard', length: null}
        ]);

    // velidate Genre
    if (!errors.length && !generes.includes ((params.genere).toLowerString()))
        errors.push('generes must be one from: ', generes.join(', '));

    // velidate Gener
    if (!errors.length && ![1,0].includes (params.is_premium))
        errors.push('Is-premium must be one from 0,1.');

    // velidate academy_type
    if (!errors.length && !academy_type.includes ((params.academy_type).toLowerString()))
        errors.push('academy-type must be one from: ', academy_type.join(', '));

    // velidate academy_standard
    if (!errors.length && parseInt (params.academy_standard) > 12)
        errors.push('Academy-standard can not be more than 12!');

    if (errors.length)
        return res.send (422, {status: false, message: 'Parameters Errors!', data: errors});

    return next();
}