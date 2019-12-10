const connection = require('../../../../database/connection');

/**
 * Update book
 * 
 * @param int book_id
 * @param object book 
 * 
 * @return cbList
 */
module.exports = (book_id, book, cbUpdate) => {
    connection.query ({
        sql: 'UPDATE `books` SET ? WHERE `id` = ?',
        values: [book, book_id]
    }, cbUpdate);
}