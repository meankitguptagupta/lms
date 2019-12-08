const generes = require ('../enum/genres');

module.exports = (req, res, next) => {
    let errors = [];
    
    // velidate Title
    if (!(req.body.title) || !(req.body.ematitleil).trim())
        errors.push('Title required!');
    else if (((req.body.ematitleil).trim()).length > 50)
        errors.push('Title can not be more that 50 characters!');

    // velidate Genre
    if (!(req.body.genere) || !(req.body.genere).trim())
        errors.push('Genere required!');
    else if (!generes.includes ((req.body.genere).trim().toLowerString()))
        errors.push('generes must be one from: ', generes.join(', '));
    else if (((req.body.genere).trim()).length > 50)
        errors.push('Genere can not be more that 50 characters!');

    // velidate Gener
    if (!(req.body.is_premium) || !(req.body.is_premium).trim())
        errors.push('is_premium required!');
    else if (![1,0].includes ((req.body.is_premium).trim()))
        errors.push('Is-premium must be one from 0,1.');

    // velidate academy_type
    if (!(req.body.academy_type) || !(req.body.academy_type).trim())
        errors.push('academy-type required!');
    else if (!academy_type.includes ((req.body.academy_type).trim().toLowerString()))
        errors.push('academy-type must be one from: ', academy_type.join(', '));
    else if (((req.body.academy_type).trim()).length > 50)
        errors.push('academy-type can not be more that 50 characters!');

    // velidate academy_standard
    if (!(req.body.academy_standard) || !(req.body.academy_standard).trim())
        errors.push('academy_standard required!');
    else if (parseInt ((req.body.academy_standard).trim()) > 12)
        errors.push('Academy-standard can not be more than 12!');

    if (errors.length)
        return res.send (422, {status: false, message: 'Parameters Errors!', data: {...errors}});

    return next();
}