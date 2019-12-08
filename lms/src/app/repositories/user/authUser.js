const connection = require('../../../../database/connection');

/**
 * Check for user by Email into DB
 * 
 * @table `lms`.`users`
 * 
 * @param String email
 * 
 * @return cbAuthUser
 */
module.exports = (email, cbAuthUser) => {
    connection.query ({
        sql: 'SELECT `id`, `password` FROM `users` WHERE `email` = ?',
        values: [email]
    }, cbAuthUser);
}