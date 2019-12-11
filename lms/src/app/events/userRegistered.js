const addUserProfile = require ('../repositories/user/addUserProfile'),
    countUser = require ('../repositories/user/countUser'),
    setRoleAndStatusOfUser = require ('../repositories/user/setRoleAndStatusOfUser'),
    addStudent = require ('../repositories/student/add');

    
module.exports = (user) => {
    // save user detail into `user_profile`
    addUserProfile (user);

    // count user registered
    countUser((err, result, fields) => {
        if (err)
            throw err;

        let role = result[0].total === 1 ? 'admin' : 'student';

        // set user's role and status of registered user
        setRoleAndStatusOfUser (
            user.user_id, 
            role, 
            result[0].total === 1 ? true : false
        );

        if (role === 'student') {
            // add student empty profile
            addStudent (user.user_id);
        }
    });
}