const addBook = require ('../../repositories/book/create'),
    checkTagIdExists = require ('../../repositories/book/checkTagIdExists'),
    getParams = require ('../../helpers/getParams');

module.exports = (req, res) => {
    let params = getParams(req),
        book = {
            tag_id: params.tag_id,
            title: params.title,
            genere: params.genere,
            is_premium: parseInt (params.is_premium),
            academy_type: params.academy_type,
            academy_standard: parseInt (params.academy_standard),
            fields: params.fields || null,
        }

    // check of tag-id exists
    checkTagIdExists (params.tag_id, (err, result, fields) => {
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
            return res.send (200, {status: true, message: 'Book successfully saved!', data: {book_id: result.insertId}});
        });
    });    
}