const roles = require('../../enum/roles');

module.exports = (req, res) => {
    return res.send (200, {status: true, message: 'Roles', data: {...roles}}) ;
}