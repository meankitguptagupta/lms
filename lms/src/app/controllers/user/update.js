const updateUser = require ('../../repositories/user/updateUser'),
    getParams = require ('../../helpers/getParams');

module.exports = (req, res) => {

    updateUser (req.user.id, getParams (req), (err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}) ;

        // send success
        return res.send (200, {status: true, message: 'User successfully updated!', data: {user_id: req.user.id} });
    })
}