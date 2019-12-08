const connection = require('../../../../database/connection');


/**
 * Find User data from DB
 * 
 * @param INT user_id
 * 
 * @table `lms`.`users` + `lms`.`user_profile`
 * 
 * @return cbFindUserById
 */
module.exports = (user_id, cbFindUserById) => {
    let sql = 'SELECT `u`.`id`,`u`.`email`, `u`.`role`, `u`.`status`, `u`.`created_at`, `up`.`first_name`, `up`.`last_name`, `up`.`contact_number`, `up`.`address`, `up`.`city`, `up`.`pincode` FROM `users` AS `u` LEFT JOIN `user_profile` AS `up` ON `up`.`user_id` = `u`.`id` WHERE `id` = ?';
    connection.query ({
        sql:sql,
        values: [user_id]
    }, cbFindUserById);
}