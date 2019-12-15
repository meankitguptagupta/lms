const returnBook = require ('../../repositories/register/return-book'),
    getParams = require ('../../helpers/getParams'),
    filterObj = require ('../../helpers/filterObj'),
    filterParams = require ('../../helpers/filterParams'),
    bookExists = require ('../../repositories/book/exists'),
    studentExists = require ('../../repositories/student/exists');

module.exports = (req, res) => {
    let register = filterObj (filterParams (getParams(req), [
        'book_id', 'user_id'
    ]));

    // check if book exists
    bookExists (register.book_id, (err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}});
        
        // check if book-id not exists
        if (!result[0].exists)
            return res.send (404, {status: false, message: 'Invalid book-id', data: {book_id: 'Invalid Book'}});

        // check if student exists
        studentExists (register.user_id, (err, result, fields) => {
            // check if db error exists
            if (err) 
                return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}});

            // check if student not exists of inactive status
            if (!result[0])
                return res.send (404, {status: false, message: 'Invalid student-id', data: {user_id: 'Invalid Student'}});

            // check of tag-id exists
            returnBook (register.user_id, register.book_id, (err, result, fields) => {
                // check if db error exists
                if (err) 
                    return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}) ;

                    // return success
                    return res.send (200, {status: true, message: 'Book successfully returned!', data: result});
            });
        });
    });
}