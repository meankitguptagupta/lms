const connection = require('../../../../database/connection');

module.exports = (email, password, cbRegisterUser) => {
    connection.query ({
        sql: 'INSERT INTO `users`(`email`, `password`) VALUES (?, ?)',
        values: [email, password]
    }, cbRegisterUser);
}