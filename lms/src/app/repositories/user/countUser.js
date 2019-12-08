const connection = require('../../../../database/connection');

/**
 * COUNt users into DB
 * 
 * @table `lms`.`users`
 * 
 * @return cbCountUser
 */
module.exports = (cbCountUser) => {
    connection.query ('SELECT COUNT(`id`) AS `total` FROM `users` WHERE `deleted_at` IS NULL', cbCountUser);
}