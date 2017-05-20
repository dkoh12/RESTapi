'use strict';

var moment = require('moment-timezone');
var mongoose = require('mongoose'),
	Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
	Task.find({}, function(err, task) {
		if (err)
			res.send(err);
		res.json(task);
	});
};

exports.delete_all_tasks = function(req, res) {
	Task.remove({}, function(err, task) {
		if (err)
			res.send(err);
		res.json({message: 'Local Database cleared'});
	});
};


exports.create_a_task = function(req, res) {
	var new_task = new Task(req.body);
	new_task.save(function(err, task) {
		if (err)
			res.send(err);

		res.json(task);
	});
};

// outputs utc time stored in database
exports.read_a_task = function(req, res) {
	Task.findById(req.params.taskId, function(err, task) {
		if (err)
			res.send(err);

		res.json(task);
	});
};


exports.update_a_task = function(req, res) {
	Task.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
		if (err)
			res.send(err);
		res.json(task);
	});
};


exports.delete_a_task = function(req, res) {
	Task.remove({
		_id: req.params.taskId
	}, function(err, task) {
		if (err)
			res.send(err);
		res.json({message: 'Time successfully deleted'});
	});
};


// pass in timezone parameter and converts time into a different timezone
exports.show_time = function(req, res) {
	Task.findById(req.params.taskId, function(err, task) {
		if (err)
			res.send(err)

		var s = task.time;
		if (req.params.timezone === 'Berlin')
			s = moment(task.time).tz("Europe/Berlin").format('YYYY-MM-DD HH:mm Z');
		else if (req.params.timezone === "NewYork")
			s = moment(task.time).tz("America/New_York").format('YYYY-MM-DD HH:mm Z');
		else if (req.params.timezone === "Sydney")
			s = moment(task.time).tz("Australia/Sydney").format('YYYY-MM-DD HH:mm Z');
		else if (req.params.timezone === "LA")
			s = moment(task.time).tz("America/Los_Angeles").format('YYYY-MM-DD HH:mm Z');

		var converted = JSON.parse(JSON.stringify(task));
		converted.time = s;

		res.json(converted);
	});
};





