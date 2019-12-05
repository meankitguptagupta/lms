const connection = require('../../../../database/connection');

module.exports = (email, password) => {
    return new Promise ((resolve, reject) => {
        connection.query ({
            sql: 'INSERT INTO `users`(`email`, `password`) VALUES (?, ?)',
            values: [email, password]
        }, (err, result, fields) => {
            if (err)
                return reject (err);
            
            return resolve (result);
        });
    })
}