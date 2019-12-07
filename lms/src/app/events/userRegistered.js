const addUserProfile = require ('../repositories/user/addUserProfile'),
    countUser = require ('../repositories/user/countUser'),
    setRoleAndStatusOfUser = require ('../repositories/user/setRoleAndStatusOfUser');

    
module.exports = (user) => {
    // save user detail into `user_profile`
    addUserProfile (user);

    // count user registered
    countUser((err, result, fields) => {
        if (err)
            throw err;

        // set user's role and status of registered user
        setRoleAndStatusOfUser (
            user.user_id, 
            result[0].total === 1 ? 'admin' : 'student', 
            result[0].total === 1 ? true : false
        );
    });
}