const academic_types = require('../../enum/academic_type');

module.exports = (req, res) => {
    return res.send (200, {status: true, message: 'Genres', data: {...academic_types}}) ;
}