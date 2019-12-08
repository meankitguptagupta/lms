const connection = require('../../../../database/connection');

/**
 * Register user into DB
 * 
 * @param STRING|EMAIL email
 * @param STRING password
 * 
 * @table `lms`.`users`
 * 
 * @return cbRegisterUser
 */
module.exports = (email, password, cbRegisterUser) => {
    connection.query ({
        sql: 'INSERT INTO `users`(`email`, `password`) VALUES (?, ?)',
        values: [email, password]
    }, cbRegisterUser);
}