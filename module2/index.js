var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Welcome to express');
});

app.get('/customers', function(req, res) {
    res.send('Welcome to customers section')
});

app.listen(3000);