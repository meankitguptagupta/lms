let validateEmail = require ('../helpers/validateEmail'),
    validateContactNumber = require ('../helpers/validateContactNumber');

module.exports = (req, res, next) => {
    let errors = [];
    if (!(req.body.email) || !(req.body.email).trim())
        errors.push('Email required!');
    else if(!validateEmail ((req.body.email).trim()))
        errors.push('Invalid Email!');

    if (!(req.body.password) || !(req.body.password).trim())
        errors.push('Password required!');

    if (!(req.body.first_name) || !(req.body.first_name).trim())
        errors.push('First-Name required!');

    if (!(req.body.last_name) || !(req.body.last_name).trim())
        errors.push('Last Name required!');

    if (!(req.body.contact_number) || !(req.body.contact_number).trim())
        errors.push('Contact-Number required!');
    else if (!validateContactNumber((req.body.contact_number).trim()))
        errors.push('Contact-Number Invalid!');

    if (errors.length)
        return res.send (422, {status: false, message: 'Parameters Errors!', data: errors});

    return next;
}