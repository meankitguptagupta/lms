const connection = require('../../../../database/connection');

module.exports = (user_id, role, status, cbSetRoleAndStatusOfUser) => {
    connection.query ({
        sql: 'UPDATE `users` SET `role` = ?, `status` = ? WHERE `id` = ?',
        values: [role, status, user_id]
    }, cbSetRoleAndStatusOfUser);
}