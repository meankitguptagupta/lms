const update = require ('../../repositories/student/update'),
    getParams = require ('../../helpers/getParams'),
    filterParams = require ('../../helpers/filterParams'),
    filterObj = require ('../../helpers/filterObj');

module.exports = (req, res) => {

    let student = filterObj (filterParams (getParams(req), [
        'guardian_name', 'guardian_contact_number', 'academy_name',
        'academy_address', 'academy_city', 'academy_pincode',
        'academy_type', 'academy_standard'
    ]));
    
    update (req.user.id, student, (err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {error: err}}) ;

        // send success
        return res.send (200, {status: true, message: 'Student profile successfully updated!', data: {user_id: req.params.user_id} });
    })
}