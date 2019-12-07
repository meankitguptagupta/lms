const connection = require('../../../../database/connection');

module.exports = (email, cbAuthUser) => {
    connection.query ({
        sql: 'SELECT `id`, `password` FROM `users` WHERE `email` = ?',
        values: [email]
    }, cbAuthUser);
}