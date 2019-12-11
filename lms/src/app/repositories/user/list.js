const connection = require('../../../../database/connection');

/**
 * Fetch list of all users
 * 
 * @table `lms`.`users`
 * 
 * @return cbList
 */
module.exports = (cbList) => {
    let sql = "SELECT `u`.`id`, `u`.`email`, `u`.`status`, `u`.`role`, `up`.`first_name`, `up`.`last_name`, `s`.`guardian_name` FROM `users` AS `u` LEFT JOIN `user_profile` AS `up` ON `up`.`user_id` = `u`.`id` LEFT JOIN `students` AS `s` ON `s`.`user_id` = `u`.`id`";
    connection.query (sql, cbList);
}