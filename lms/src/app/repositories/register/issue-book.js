const connection = require('../../../../database/connection');

/**
 * Add student into table
 * 
 * @param object register {book_id => INT, user_id => INT}
 * @table `lms`.`register`
 * 
 * @return cbAdd
 */
module.exports = (register, cbAdd) => {
    connection.query ({
        sql: "INSERT INTO `register` SET ?",
        values: register
    }, cbAdd);
}