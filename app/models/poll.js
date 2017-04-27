var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var numSchema = new mongoose.Schema({ 
	dig1: { type: Number, required: true },
	dig2: { type: Number, required: true },
	dig3: { type: Number, required: true }
});

var dirSchema = new mongoose.Schema({ 
	dir1: { type: String, required: true },
	dir2: { type: String, required: true }
});

var perSchema = new mongoose.Schema({ 
	pnum: { type: Number, required: true },
	//parentesco: { type: String, required: true },
	snum: { type: Number, required: true },
	//sexo: { type: String, required: true },
	edad: { type: Number, required: true },
	etnum: { type: Number, required: true },
	//etnia: { type: String, required: true },
	punum: { type: Number, required: true },
	//pueblo: { type: String, required: true },
	inum: { type: Number, required: true },
	//idioma: { type: String, required: true },
	lnum: { type: Number, required: true },
	//lugar: { type: String, required: true },
	nnum: { type: Number, required: true }//,
	//nivel: { type: String, required: true }
});



// Document schema for polls
var PollSchema = new mongoose.Schema({
	parroquia: { type: String, required: true },
	zona: [numSchema],
	sector: [numSchema],
	comunidad: { type: String, required: true },
	direccion: [dirSchema],
	personas : [perSchema],
	final: { type: String, required: true }
});

module.exports = mongoose.model('Poll', PollSchema)