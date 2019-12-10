const connection = require('../../../../database/connection');

/**
 * Patch student status
 * 
 * @param int student_id/user_id
 * @table `lms`.`users`
 * 
 * @return cbPatch
 */
module.exports = (user_id, cbPatch) => {
    connection.query ({
        sql: "UPDATE `users` SET `status` = !`status` WHERE `role` = ? AND `id` = ?",
        values: ['student', user_id]
    }, cbPatch);
}