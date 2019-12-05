const connection = require('../../../../database/connection');

module.exports = (email) => {
    return new Promise ((resolve, reject) => {
        connection.query ({
            sql: 'SELECT COUNT(`email`) AS `exists` FROM `users` WHERE `email` = ? AND `deleted_at` IS NULL LIMIT 1', 
            values: [email]
        }, (err, result, fields) => {
            if (err)
                return reject (err);
            
            return resolve (result[0]);
        });
    })
}