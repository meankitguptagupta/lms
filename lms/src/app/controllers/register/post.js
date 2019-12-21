const getParams = require ('../../helpers/getParams'),
    filterObj = require ('../../helpers/filterObj'),
    filterParams = require ('../../helpers/filterParams'),
    postService = require ('../../services/register/post');

module.exports = (req, res) => {
    let register = filterObj (filterParams (getParams(req), [
        'book_id', 'user_id', 'proposed_return_date'
    ]));

    postService.validateBook (register.book_id, (err, resp) => {
        // check if book not validated!
        if (err)
            return res.send (err.code, err.response);

        // check if book not available
        postService.checkBookAvailable (register.book_id, (err, resp) => {
            // check if book not available!
            if (err)
                return res.send (err.code, err.response);

            postService.validateStudent (register.user_id, (err, resp) => {
                // check if user not exists or active!
                if (err)
                    return res.send (err.code, err.response);

                // issue a book tgo student
                postService.issueBookToStudent (register, (err, resp) => {
                    // check if unable to assign book to student
                    if (err)
                        return res.send (err.code, err.response);

                    // send response as success
                    return res.send (resp.code, resp.response);
                })
            });
        });
    })
}