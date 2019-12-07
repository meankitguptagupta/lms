const AuthUser = require ('../repositories/user/authUser'),
    hash = require ('../helpers/hash'),
    jsonToken = require ('../helpers/jsonToken');

module.exports = (req, res) => {
    AuthUser ((req.body.email).trim(), (err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {}}) ; 

        // check if user exists
        if (!result[0])
            return res.send (404, {status: false, message: 'User not found!', data: {}});

        // validate password
        if (!hash.compareHash ((req.body.password).trim(), result[0].password))
            return res.send (422, {status: false, message: 'Invalid  password', data: {}});

        // send success
        return res.send (200, {status: true, message: 'Login successful', data: jsonToken.generateToken ({user_id: result[0].id}) });
    });
}