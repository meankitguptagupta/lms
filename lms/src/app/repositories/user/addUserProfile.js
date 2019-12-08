const connection = require('../../../../database/connection');

/**
 * Save User into DB
 * 
 * @param object user 
 * 
 * @table `lms`.`users`
 * 
 * @book = {
 *              email: STRING | EMAIL, 
 *              password: STRING
 *          }
 * 
 * @return cbAddUserProfile
 */
module.exports = (user, cbAddUserProfile) => {
    connection.query ({
        sql: 'INSERT INTO `user_profile` SET ?',
        values: user
    }, cbAddUserProfile);
}