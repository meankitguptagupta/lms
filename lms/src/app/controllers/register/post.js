const issueBook = require ('../../repositories/register/issue-book'),
    getParams = require ('../../helpers/getParams'),
    filterObj = require ('../../helpers/filterObj'),
    filterParams = require ('../../helpers/filterParams'),
    bookExists = require ('../../repositories/book/exists'),
    bookAvailable = require ('../../repositories/register/available'),
    studentExists = require ('../../repositories/student/exists');

module.exports = (req, res) => {
    let register = filterObj (filterParams (getParams(req), [
        'book_id', 'user_id', 'proposed_return_date'
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

            if (!result[0].status)
                return res.send (412, {status: false, message: 'Student not active', data: {user_id: 'Student not active'}});

            // check if books already assigned to someone else
            bookAvailable (register.book_id,  (err, result, fields) => {
                // check if db error exists
                if (err) 
                    return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}});

                if (result[0].available)
                    return res.send (412, {status: false, message: 'Book not available', data: {book_id: 'Book already assigned!'}});

                // check of tag-id exists
                issueBook (register, (err, result, fields) => {
                    // check if db error exists
                    if (err) 
                        return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}) ;

                        // return success
                        return res.send (201, {status: true, message: 'Book successfully saved!', data: result});
                });
            });
        });
    });
}