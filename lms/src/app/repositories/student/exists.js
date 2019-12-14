const connection = require('../../../../database/connection');

/**
 * Check if Student Exists and active
 * 
 * @param int user_id
 * 
 * @return cbExist
 */
module.exports = (user_id, cbExist) => {
    connection.query ({
        sql: 'SELECT `status` FROM `users` WHERE `id` = ? AND `deleted_at` IS NULL',
        values: user_id
    }, cbExist);
}