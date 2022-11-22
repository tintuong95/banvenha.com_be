const bcrypt = require("bcrypt");
const saltRounds = process.env.SALT || 10;

function hashPassword(password) {
    return bcrypt.hashSync(password, saltRounds);
}

function comparePassword(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword)
}

module.exports = {
    hashPassword,
    comparePassword,
};