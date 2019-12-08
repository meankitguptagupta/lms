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
 * @return cbSetRoleAndStatusOfUser
 */
module.exports = (user_id, role, status, cbSetRoleAndStatusOfUser) => {
    connection.query ({
        sql: 'UPDATE `users` SET `role` = ?, `status` = ? WHERE `id` = ?',
        values: [role, status, user_id]
    }, cbSetRoleAndStatusOfUser);
}