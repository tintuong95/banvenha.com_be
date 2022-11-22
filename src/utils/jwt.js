const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY || "secretKey";

function signTokenJwt(data, timeSeconds) {
    return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + timeSeconds,
            data,
        },
        secretKey,
    );
}


function compareTokenJwt(token) {
    return jwt.verify(token, secretKey);
}

module.exports = {
    signTokenJwt,
    compareTokenJwt,
};