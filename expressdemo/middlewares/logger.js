function log(req, res, next) {
    console.log(`${req.method} request made at ${Date.now()}`);
    next();
}

module.exports = log;