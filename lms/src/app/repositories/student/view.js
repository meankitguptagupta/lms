const connection = require('../../../../database/connection');

/**
 * fetch Student profile
 * 
 * @param int student_id/user_id
 * @table `lms`.`students`
 * 
 * @return cbView
 */
module.exports = (user_id, cbView) => {
    connection.query ({
        sql: "SELECT `guardian_name`, `guardian_contact_number`, `academy_name`, `academy_address`, `academy_city`, `academy_pincode`, `academy_type`, `academy_standard`, `updated_at` FROM `students` WHERE `user_id` = ?",
        values: [user_id]
    }, cbView);
}  