const addBook = require ('../../repositories/book/create'),
    checkTagIdExists = require ('../../repositories/book/checkTagIdExists'),
    getParams = require ('../../helpers/getParams'),
    filterObj = require ('../../helpers/filterObj');

module.exports = (req, res) => {
    let book = filterObj (filterParams (getParams(req), [
        'tag_id', 'title', 'genere', 'is_premium',
        'academy_type', 'academy_standard', 'fields'
    ]));

    // check of tag-id exists
    checkTagIdExists (book.tag_id, (err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}) ;

        if (result[0].exists)
            return res.send (409, {status: false, message: 'Duplicate Tag-ID', data: {tag_id: 'Tag-ID already exists!'}}) ;

        // save book into DB
        addBook (book, (err, result, fields) => {
            // check if db error exists
            if (err) 
                return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}) ;

            // return success
            return res.send (201, {status: true, message: 'Book successfully saved!', data: {book_id: result.insertId}});
        });
    });    
}