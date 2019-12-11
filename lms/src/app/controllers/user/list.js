const list = require ('../../repositories/user/list');

module.exports = (req, res) => {

    list ((err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}) ;

        // send success
        return res.send (200, {status: true, message: 'User successfully updated!', data: result });
    })
}