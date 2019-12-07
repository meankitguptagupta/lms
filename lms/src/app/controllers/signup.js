const checkUserExistsByEmail = require ('../repositories/user/checkUserExistsByEmail'),
    registerUser = require ('../repositories/user/registerUser'),
    hash = require ('../helpers/hash'),
    eventEmitter = require ('../events');

module.exports = (req, res) => {

    // check if Email already exists
    checkUserExistsByEmail((req.body.email).trim(), ((err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {}}) ;

        // check if user already exists
        if (result[0].exists)
            return res.send (409, {status: false, message: 'Email already registered!', data: {}});

        // register user
        registerUser ((req.body.email).trim(), hash.hashStr ((req.body.password).trim()), (err, result, fields) => {
            if (err) 
                return res.send (500, {status: false, message: 'Database Error', data: {}}) ;

            // call event after user registration
            eventEmitter.emit('userRegistered', {
                user_id: result.insertId,
                first_name: (req.body.first_name).trim(), 
                last_name: (req.body.last_name).trim(), 
                contact_number: (req.body.contact_number).trim()
            });
            
            // return success
            return res.send (200, {status: true, message: 'User successfully registered!', data: {}});
        })
        
    }));
}