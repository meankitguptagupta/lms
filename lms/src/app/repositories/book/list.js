const connection = require('../../../../database/connection');

/**
 * List books
 * 
 * @param object book 
 * 
 * @return cbList
 */
module.exports = (cbList) => {
    connection.query (
        'SELECT `id`, `title`, `genere`, `is_premium`, `academy_type`, `academy_standard`, `fields`, `created_at` FROM `books`', 
        cbList
    );
}