const cookie = require('cookie');

function setCookies(res, stringHash, timeSecond) {
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("accessToken", String(stringHash), {
            httpOnly: true,
            maxAge: timeSecond, // 1 week 60 * 60 * 24 * 7
        })
    );
}




module.exports = {
    setCookies,
};