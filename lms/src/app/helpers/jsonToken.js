const jwt = require('jsonwebtoken');
    privateKey = 'library-management-system';

let generateToken = (data) => {
    return jwt.sign(data, privateKey, { expiresIn: 60 * 60 });
}

module.exports = {
    generateToken: generateToken
}