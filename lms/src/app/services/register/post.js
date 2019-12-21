const bookExists = require ('../../repositories/book/exists'),
    bookAvailable = require ('../../repositories/register/available'),
    studentExists = require ('../../repositories/student/exists'),
    issueBook = require ('../../repositories/register/issue-book'),
    ALLOW_ROLE = 'student';

/**
 * Method to check if Book exists
 * 
 * @param int book_id
 * @param callback cbValidateBook
 */
function validateBook (book_id, cbValidateBook) {
    // check if book exists
    bookExists (book_id, (err, result, fields) => {
        // check if db error exists
        if (err) 
            return cbValidateBook ({
                code: 500,
                response: {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}
            });
        
        // check if book-id not exists
        if (!result[0].exists)
            return cbValidateBook ({
                code: 404,
                response: {status: false, message: 'Invalid book-id', data: {book_id: 'Invalid Book'}}
            });

        return cbValidateBook (null, null);
    });
}

/**
 * Method to check f Book available or not
 * @param int book_id 
 * @param Callback cbCheckBookAvailable 
 */
function checkBookAvailable (book_id, cbCheckBookAvailable) {
    // check if books already assigned to someone else
    bookAvailable (book_id,  (err, result, fields) => {
        // check if db error exists
        if (err) 
            return cbCheckBookAvailable ({
                code: 500,
                response: {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}
            });

        if (result[0].available)
            return cbCheckBookAvailable ({
                code: 412,
                response: {status: false, message: 'Book not available', data: {book_id: 'Book already assigned!'}}
            });

        return cbCheckBookAvailable (null, null);
    });
}

/**
 * Method to check if student exists and active
 * 
 * @param int user_id 
 * @param Callback cbValidateStudent 
 */
function validateStudent (user_id, cbValidateStudent) {
    // check if student exists
    studentExists (user_id, (err, result, fields) => {
        // check if db error exists
        if (err) 
            return cbValidateStudent ({
                code: 500,
                response: {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}
            });

        // check if student not exists of inactive status
        if (!result[0])
            return cbValidateStudent ({
                code: 404,
                response: {status: false, message: 'Invalid student-id', data: {user_id: 'Invalid Student'}}
            });

        // check if user role is valid
        if (result[0].role !== ALLOW_ROLE)
            return cbValidateStudent ({
                code: 412,
                response: {status: false, message: 'Invalid Role', data: {user_id: 'User is not Student!'}}
            });

        if (!result[0].status)
            return cbValidateStudent ({
                code: 412,
                response: {status: false, message: 'Student not active', data: {user_id: 'Student not active'}}
            });

        return cbValidateStudent (null, null)
    });
}

/**
 * 
 * @param object register 
 *  {book_id: INT, user_id: INT, proposed_return_date: DATE}
 * 
 * @param Callback cbIssueBookToStudent 
 */
function issueBookToStudent (register, cbIssueBookToStudent) {
    issueBook (register, (err, result, fields) => {
        // check if db error exists
        if (err) 
            return cbIssueBookToStudent ({
                code: 500,
                response: {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}
            });

        // return success
        return cbIssueBookToStudent ({
            code: 201,
            response: {status: true, message: 'Book successfully issue!', data: register}
        });
    });
}

module.exports = {
    validateBook: validateBook,
    checkBookAvailable: checkBookAvailable,
    validateStudent: validateStudent,
    issueBookToStudent: issueBookToStudent
}