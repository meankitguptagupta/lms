const connection = require('../../../../database/connection');

/**
 * Add student into table
 * 
 * @param object register
 *      {user_id: INT, user_id: INT}
 * 
 * @table `lms`.`register`
 * 
 * @return cbUpdate
 */
module.exports = (register, cbUpdate) => {
    connection.query ({
        sql: "UPDATE `register` SET `return_date` = NOW() WHERE `book_id` = ? AND `user_id` = ? AND `return_date` IS NULL AND `deleted_at` IS NULL",
        values: [register.book_id, register.user_id]
    }, cbUpdate);
}