const connection = require('../../../../database/connection');

module.exports = (user, cbAddUserProfile) => {
    connection.query ({
        sql: 'INSERT INTO `user_profile` SET ?',
        values: user
    }, cbAddUserProfile);
}