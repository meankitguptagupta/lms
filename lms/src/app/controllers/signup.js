const checkUserExistsByEmail = require ('../repositories/user/checkUserExistsByEmail'),
    registerUser = require ('../repositories/user/registerUser'),
    hash = require ('../helpers/hash'),
    eventEmitter = require ('../events'),
    getParams = require ('../helpers/getParams');

module.exports = (req, res) => {
    let params = getParams(req);
    
    // check if Email already exists
    checkUserExistsByEmail (params.email, ((err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}) ;

        // check if user already exists
        if (result[0].exists)
            return res.send (409, {status: false, message: 'Email already registered!', data: {email: 'Email already registered'}});

        // register user
        registerUser (params.email, hash.hashStr (params.password), (err, result, fields) => {
            // check if db error exists
            if (err) 
                return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}) ;

            // call event after user registration
            eventEmitter.emit('userRegistered', {
                user_id: result.insertId,
                first_name: params.first_name, 
                last_name: params.last_name, 
                contact_number: params.contact_number
            });
            
            // return success
            return res.send (200, {status: true, message: 'User successfully registered!', data: {user_id: result.insertId}});
        })
        
    }));
}