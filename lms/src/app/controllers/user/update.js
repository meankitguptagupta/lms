const updateUser = require ('../../repositories/user/updateUser'),
    getParams = require ('../../helpers/getParams'),
    filterParams = require ('../../helpers/filterParams');

module.exports = (req, res) => {
    let user = filterParams (getParams (req), [
                    'first_name', 'last_name', 'contact_number',
                    'address', 'city', 'pincode'
                ]);

    updateUser (req.user.id, user, (err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}) ;

        // send success
        return res.send (200, {status: true, message: 'User successfully updated!', data: {user_id: req.user.id} });
    })
}