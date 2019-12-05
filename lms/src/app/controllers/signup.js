const checkUserExistsByEmail = require ('../repositories/user/checkUserExistsByEmail'),
    registerUser = require ('../repositories/user/registerUser'),
    addUserProfile = require ('../repositories/user/addUserProfile');

module.exports = (req, res) => {
    // check if email already exists
    return checkUserExistsByEmail(req.body.email).then(resolve => {
        // customer email already exists
        if (resolve.exists)
            return res.send (409, {status: false, message: 'Email already registered!', data: {}});

        // register user
        registerUser (req.body.email, req.body.password).then(resolve => {

            // add userprofile
            addUserProfile (resolve.insertId, req.body.first_name, req.body.last_name, req.body.contact_number).then(resolve => {

                // return success
                return res.send (200, {status: true, message: 'User successfully registered!', data: {}});

            }).catch (err => {
                return res.send (500, {status: false, message: 'Database Error', data: {}});
            })

        }).catch (err => {
            return res.send (500, {status: false, message: 'Database Error', data: {}});
        })

    }).catch (err => {
        return res.send (500, {status: false, message: 'Database Error', data: {}});
    })
}