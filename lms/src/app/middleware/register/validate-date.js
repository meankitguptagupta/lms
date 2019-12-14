const getParams = require ('../../helpers/getParams'),
    validateRequire = require ('../../Validations/require'),
    validateDate = require ('../../Validations/validateDate'),
    dateDiff = require ('../../helpers/dateDiff'),
    MIMIMUM_POSSIBLE_RETURN_DAYS = 7;

module.exports = (req, res, next) => {
    
    let params = getParams(req),
        errors = validateRequire (params, [
            {key: 'proposed_return_date', max_length: 10, min_length: 10},
        ]);

    // velidate academy_standard
    if (!Object.keys(errors).length && !validateDate (params.proposed_return_date))
        errors['proposed_return_date'] = 'Invalid Proposed-Return-Date!';

    if (!Object.keys(errors).length && dateDiff (params.proposed_return_date) < MIMIMUM_POSSIBLE_RETURN_DAYS)
        errors['proposed_return_date'] = `Proposed-Return-Date can not be less than ${MIMIMUM_POSSIBLE_RETURN_DAYS} date-of-issue.`;

    if (Object.keys(errors).length)
        return res.send (422, {status: false, message: 'Parameters Errors!', data: errors});

    return next();
}