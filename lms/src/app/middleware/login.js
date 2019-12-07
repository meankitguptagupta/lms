let validateEmail = require ('../helpers/validateEmail');

module.exports = (req, res, next) => {
    
    let errors = [];
    if (!(req.body.email) || !(req.body.email).trim())
        errors.push('Email required!');
    else if(!validateEmail ((req.body.email).trim()))
        errors.push('Invalid Email!');

    if (!(req.body.password) || !(req.body.password).trim())
        errors.push('Password required!');

    if (errors.length)
        return res.send (422, {status: false, message: 'Parameters Errors!', data: {...errors}});

    return next();
}