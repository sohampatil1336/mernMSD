
const express = require('express');

const app = express();

// Home route
app.get('/', function (req, res) {
    res.send('Hello world!');
});

// Hi route
app.get('/hi', function (req, res) {
    res.send('Hi!');
});

// Welcome route
app.get('/welcome', function (req, res) {
    res.send('Welcome');
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
