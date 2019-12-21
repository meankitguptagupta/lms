const connection = require('../../../../database/connection');

/**
 * Add student into table
 * 
 * @param int student_id/user_id
 * @table `lms`.`students`
 * 
 * @return cbAdd
 */
module.exports = (user_id, cbAdd) => {
    connection.query ({
        sql: "INSERT INTO `students` SET ?",
        values: {user_id: user_id}
    }, cbAdd);
}