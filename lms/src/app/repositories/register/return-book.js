const connection = require('../../../../database/connection');

/**
 * Add student into table
 * 
 * @param int user-id
 * @param int book-id
 * 
 * @table `lms`.`register`
 * 
 * @return cbUpdate
 */
module.exports = (user_id, book_id, cbUpdate) => {
    connection.query ({
        sql: "UPDATE `register` SET `return_date` = NOW() WHERE `book_id` = ? AND `user_id` = ? AND `return_date` IS NULL AND `deleted_at` IS NULL",
        values: [book_id, user_id]
    }, cbUpdate);
}