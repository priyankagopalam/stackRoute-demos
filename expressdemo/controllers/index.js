function getUsers(req, res) {
    res.send('Welcome to Express App');
}

function getHome(req, res) {
    
    res.send('This is home page');
}

module.exports = { getUsers, getHome };
