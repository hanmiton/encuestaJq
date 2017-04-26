#!/usr/bin/env node

var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');
// Get Poll schema and model

app.use(morgan('dev')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend : true}));
app.use(express.static(__dirname + '/public'));
app.use('/api', appRoutes);
/*
 * Serve static content.
 */

//http://localhost:80/api/ users
//mongoose.connect('mongodb://localhost :27017/tutorial', function(err){
mongoose.connect('mongodb://localhost:27017/encuesta2', function(err){
//mongoose.connect('mongodb://node:node@ds023644.mlab.com:23644/hanmilton',function(err){

	if(err){
		console.log('Not Connected to the database: ' + err);
	}
	else{
		console.log('Successfully connected to MongoDB');
	}
});

//app.use('/', express.static(__dirname + '/static')); 

app.get('*',function(req, res){
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});


var server = app.listen(5000, function () {
  console.log('Listening on localhost:5000');
});
