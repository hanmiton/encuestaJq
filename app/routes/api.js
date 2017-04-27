var Poll = require('../models/poll');

module.exports = function(router){
	//http://localhost:5000/polls
	//parte para grabar en base de datos
	router.post('/polls', function(req,res){
		console.log(req.body.persona[0]);
		var poll = new Poll();
		poll.parroquia = req.body.parroquia;
		//sector
		sdig1 = req.body.sector.sdig1;
		sdig2 = req.body.sector.sdig2;
		sdig3 = req.body.sector.sdig3;
		poll.sector.push({dig1: sdig1, dig2: sdig2, dig3: sdig3});
		//zona
		zdig1 = req.body.zona.zdig1;
		zdig2 = req.body.zona.zdig2;
		zdig3 = req.body.zona.zdig3;
		poll.zona.push({dig1: zdig1, dig2: zdig2, dig3: zdig3});
		//direccion
		dir1 = req.body.direccion.dir1;
		dir2 = req.body.direccion.dir2;
		poll.direccion.push({dir1: dir1, dir2: dir2});
		//comunidad
		poll.comunidad = req.body.comunidad;
		//personas
		pnum = req.body.persona.parentesco.id;
		//parentesco: req.body.persona.parentesco.name.toString();
		snum = req.body.persona.sexo.id;
		//sexo: req.body.persona.sexo.name;
		edad = req.body.persona.edad;
		etnum = req.body.persona.etnia.id;
		//etnia: req.body.persona.etnia.name;
		punum = req.body.persona.nacionalidad.id;
		//pueblo: req.body.persona.nacionalidad.name;
		inum = req.body.persona.idioma.id;
		//idioma: req.body.persona.idioma.name;
		lnum = req.body.persona.nacimiento.id;
		//lugar: req.body.persona.nacimiento.name;
		nnum = req.body.persona.nivel.id;
		//nivel: req.body.persona.nivel.name;
		poll.personas.push({pnum: pnum, //parentesco: parentesco, 
			snum: snum, 
			//sexo: sexo, 
			edad: edad, 
			etnum: etnum, 
			//etnia: etnia, 
			punum: punum, 
			//pueblo: pueblo, 
			inum: inum, 
			//idioma: idioma, 
			lnum: lnum, 
			//lugar: lugar, 
			nnum: nnum//, 
			//nivel: nivel
		});

		poll.final = req.body.final;

		console.log(poll);
		if(req.body.parroquia == null || req.body.zona == null || req.body.sector == null || req.body.comunidad == null){
			res.send('Asegurate de proveer los datos');
		} else {
			poll.save(function(err){
				if(err){
					res.send('error');
				} else {
					res.send('Encuesta Grabada');
				}
			});
		}	
	});
	return router;
}