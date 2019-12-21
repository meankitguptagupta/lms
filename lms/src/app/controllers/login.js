const AuthUser = require ('../repositories/user/authUser'),
    hash = require ('../helpers/hash'),
    jsonToken = require ('../helpers/jsonToken'),
    getParams = require ('../helpers/getParams');

module.exports = (req, res) => {
    let params = getParams(req);

    AuthUser (params.email, (err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}) ;

        // check if user exists
        if (!result[0])
            return res.send (404, {status: false, message: 'User not found!', data: {email: 'Email not found!'}});

        // validate password
        if (!hash.compareHash (params.password, result[0].password))
            return res.send (422, {status: false, message: 'Invalid  password', data: {password: 'Invalid password!'}});

        // send success
        return res.send (200, {status: true, message: 'Login successful', data:{
            type: 'JWT',
            token: jsonToken.generateToken ({
                user_id: result[0].id,
                role: result[0].role,
            })
        }});
    });
}