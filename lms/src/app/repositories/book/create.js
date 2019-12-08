const connection = require('../../../../database/connection');

/**
 * Save books into DB
 * 
 * @param object book 
 * 
 * @book = {
 *              title: STRING, 
 *              genere: STRING, 
 *              is_premium: bool, 
 *              academy_type: STRING,
 *              academy_standard: INT,
 *              fields: STRING
 *          }
 * 
 * @return cbAuthUser
 */
module.exports = (book, cbCreate) => {
    connection.query ({
        sql: 'INSERT INTO `books` SET ?',
        values: book
    }, cbCreate);
}