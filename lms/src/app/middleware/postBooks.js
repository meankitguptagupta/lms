module.exports = (req, res, next) => {
    let errors = [];
    
    

    if (errors.length)
        return res.send (422, {status: false, message: 'Parameters Errors!', data: {...errors}});

    return next();
}