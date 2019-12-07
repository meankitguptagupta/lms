const connection = require('../../../../database/connection');

module.exports = (email, cbCheckUserExistByEmail) => {
    return connection.query ({
        sql: 'SELECT COUNT(`email`) AS `exists` FROM `users` WHERE `email` = ? AND `deleted_at` IS NULL LIMIT 1', 
        values: [email]
    }, cbCheckUserExistByEmail);
}