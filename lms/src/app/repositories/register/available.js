const connection = require('../../../../database/connection');

/**
 * Check if Book available
 * 
 * @param int book_id
 * 
 * @table `register`
 * 
 * @return cbAvailable
 */
module.exports = (book_id, cbAvailable) => {
    connection.query ({
        sql: 'SELECT COUNT(`book_id`) AS `available` FROM `register` WHERE `book_id` = ? AND `deleted_at` IS NULL AND `return_date` IS NULL',
        values: book_id
    }, cbExist);
}