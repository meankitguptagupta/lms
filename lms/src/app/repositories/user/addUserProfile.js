const connection = require('../../../../database/connection');

module.exports = (user_id, first_name, last_name, contact_number) => {
    return new Promise ((resolve, reject) => {
        connection.query ({
            sql: 'INSERT INTO `user_profile` SET ?',
            values: {
                user_id: user_id, 
                first_name: first_name,
                last_name: last_name,
                contact_number: contact_number,
            }
        }, (err, result, fields) => {
            if (err)
                return reject (err);
            
            return resolve (result);
        });
    })
}