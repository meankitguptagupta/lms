const connection = require('../../../../database/connection');

/**
 * Set Role and status of the user
 * 
 * @param INT user_id
 * @param STRING role
 * @param INT|BOOLEN status
 * 
 * @table `lms`.`users`
 * 
 * @return cbUpdateUser
 */
module.exports = (user_id, user, cbUpdateUser) => {
    connection.query ({
        sql: 'UPDATE `user_profile` SET ? WHERE `user_id` = ?',
        values: [user, user_id]
    }, cbUpdateUser);
}