const checkUserExistsByEmail = require ('../repositories/user/checkUserExistsByEmail'),
    registerUser = require ('../repositories/user/registerUser'),
    eventEmitter = require ('../events');

module.exports = (req, res) => {
    checkUserExistsByEmail((req.body.email).trim(), ((err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {}}) ;

        // check if user already exists
        if (result[0].exists)
            return res.send (409, {status: false, message: 'Email already registered!', data: {}});

        // register user
        registerUser ((req.body.email).trim(), (req.body.password).trim(), (err, result, fields) => {
            if (err) 
                return res.send (500, {status: false, message: 'Database Error', data: {}}) ;
          
            // return success
            res.send (200, {status: true, message: 'User successfully registered!', data: {}});

            // call event after user registration
            eventEmitter.emit('userRegistered', {
                user_id: result.insertId,
                first_name: (req.body.first_name).trim(), 
                last_name: (req.body.last_name).trim(), 
                contact_number: (req.body.contact_number).trim()
            });
        })
        
    }));
}