const connection = require('../../../../database/connection');

/**
 * Check if Book Exists
 * 
 * @param int book_id
 * 
 * @return cbExist
 */
module.exports = (book_id, cbExist) => {
    connection.query ({
        sql: 'SELECT COUNT(`id`) AS `exists` FROM `books` WHERE `id` = ? AND `deleted_at` IS NULL',
        values: book_id
    }, cbExist);
}