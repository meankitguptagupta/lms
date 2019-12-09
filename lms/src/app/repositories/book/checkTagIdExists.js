const connection = require('../../../../database/connection');

/**
 * Check if tag-id of the book is exists
 * 
 * @param string tag-id
 * 
 * @return cbCheckTagIdExists
 */
module.exports = (tag_id, cbCheckTagIdExists) => {
    connection.query ({
        sql: 'SELECT COUNT(`id`) AS `exists` FROM `books` WHERE `tag_id` = ?',
        values: [tag_id]
    }, cbCheckTagIdExists);
}