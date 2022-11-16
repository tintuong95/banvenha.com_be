// setup header cors backend
module.exports = function cors(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept,Set-Cookie"
    );
    res.header("Vary", "Origin ");
    res.header("Cross-Origin-Resource-Policy", "cross-origin");
    next();
};