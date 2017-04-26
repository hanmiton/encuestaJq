var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Document schema for polls
var PollSchema = new mongoose.Schema({
	parroquia: { type: String, required: true }
});

module.exports = mongoose.model('Poll', PollSchema)