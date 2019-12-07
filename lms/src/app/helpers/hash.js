const bcrypt = require ('bcrypt'),
    saltRounds = 10;
let hashStr = (str) => {
        return bcrypt.hashSync(str, saltRounds);
    }

let compareHash = (str, hashStr) => {
        return bcrypt.compareSync(str, hashStr);
    }

module.exports = {
    hashStr: hashStr,
    compareHash: compareHash
}