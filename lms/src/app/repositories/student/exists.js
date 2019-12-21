const connection = require('../../../../database/connection');

/**
 * Check if Student Exists and active
 * 
 * @param int user_id
 * 
 * @table `users`
 * 
 * @return cbExist
 */
module.exports = (user_id, cbExist) => {
    connection.query ({
        sql: 'SELECT `status`, `role` FROM `users` WHERE `id` = ? AND `deleted_at` IS NULL',
        values: user_id
    }, cbExist);
}