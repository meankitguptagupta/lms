const connection = require('../../../../database/connection');

module.exports = (cbCountUser) => {
    connection.query ('SELECT COUNT(`id`) AS `total` FROM `users` WHERE `deleted_at` IS NULL', cbCountUser);
}