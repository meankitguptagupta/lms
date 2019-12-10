const getParams = require ('../../helpers/getParams'),
    validateRequire = require ('../../Validations/require');

module.exports = (req, res, next) => {
    let params = getParams(req),
        errors = validateRequire (params, [
            {key: 'tag_id', max_length: 10, min_length: 1},
        ]);

    if (Object.keys(errors).length)
        return res.send (422, {status: false, message: 'Parameters Errors!', data: errors});

    return next();
}