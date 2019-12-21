const connection = require('../../../../database/connection');

/**
 * Check if Register entry exists
 * 
 * @param object register
 *      {user_id: INT, user_id: INT}
 * 
 * @table `lms`.`register`
 * 
 * @param Callback cbExists
 */
module.exports = (register, cbExists) => {
    connection.query ({
        sql: "SELECT `return_date` FROM `register` WHERE `book_id` = ? AND `user_id`= ? AND `deleted_at` IS NULL",
        values: [register.book_id, register.user_id]
    }, cbExists);
}