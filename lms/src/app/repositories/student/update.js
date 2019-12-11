const connection = require('../../../../database/connection');

/**
 * Update Or Create Student Profile
 * 
 * @param int student_id/user_id
 * @param object student
 *  {
 *      guardian_name: STRING, 
 *      guardian_contact_number: STRING, 
 *      academy_name: STRING, 
 *      academy_address: STRING, 
 *      academy_city: STRING, 
 *      academy_pincode: STRING, 
 *      academy_type: STRING, 
 *      academy_standard: STRING
 * }
 * 
 * @table `lms`.`students`
 * 
 * @return cbUpdate
 */
module.exports = (user_id, student, cbUpdate) => {
    // SELECT `guardian_name`, `guardian_contact_number`, `academy_name`, `academy_address`, `academy_city`, `academy_pincode`, `academy_type`, `academy_standard`, `updated_at` FROM `students` WHERE `user_id` = ?

    // check if student already exists
    connection.query ({
        sql: "UPDATE `students` SET ? WHERE `user_id` = ?",
        values: [student, user_id]
    }, cbUpdate);
}