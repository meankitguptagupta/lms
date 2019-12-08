const connection = require('../../../../database/connection');

/**
 * Check if user exists into DB by user-email
 * 
 * @table `lms`.`users`
 * 
 * @param string email 
 * 
 * @return cbAuthUser
 */
module.exports = (email, cbCheckUserExistByEmail) => {
    return connection.query ({
        sql: 'SELECT COUNT(`email`) AS `exists` FROM `users` WHERE `email` = ? AND `deleted_at` IS NULL LIMIT 1', 
        values: [email]
    }, cbCheckUserExistByEmail);
}