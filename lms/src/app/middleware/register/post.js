const getParams = require ('../../helpers/getParams'),
    validateRequire = require ('../../Validations/require');

module.exports = (req, res, next) => {
    
    let params = getParams(req),
        errors = validateRequire (params, [
            {key: 'book_id', max_length: null, min_length: 1},
            {key: 'user_id', max_length: null, min_length: 1}
        ]);

    if (Object.keys(errors).length)
        return res.send (422, {status: false, message: 'Parameters Errors!', data: errors});

    return next();
}