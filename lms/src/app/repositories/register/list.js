const connection = require('../../../../database/connection');

/**
 * List all register entry
 * 
 * @table `lms`.`register`
 * 
 * @return cbList
 */
module.exports = (cbList) => {
    connection.query ("SELECT `book_id`, `register`.`user_id`, `proposed_return_date`, `return_date`, `register`.`created_at`, `tag_id`, `title`, `first_name`, `last_name` FROM `register` LEFT JOIN `books` ON `books`.`id` = `register`.`book_id` LEFT JOIN `user_profile` ON `user_profile`.`user_id` = `register`.`user_id` WHERE `register`.`deleted_at` IS NULL", cbList);
}