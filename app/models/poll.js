var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var numSchema = new mongoose.Schema({ 
	dig1: { type: Number, required: true },
	dig2: { type: Number, required: true },
	dig3: { type: Number, required: true }
});

// Document schema for polls
var PollSchema = new mongoose.Schema({
	parroquia: { type: String, required: true },
	zona: [numSchema],
	sector: [numSchema],
	final: { type: String, required: true }
});

module.exports = mongoose.model('Poll', PollSchema)