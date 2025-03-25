const express = require('express');

// Initializing the express app
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Express App');
})

app.get('/home', (req, res) => {
    res.send('This is my home page');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

