var express = require('express');
var app = express(); // ./app

var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var Task = require('./models/Model');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./routes/Routes');
routes(app);

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'})
});



