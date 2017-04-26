var Poll = require('../models/poll');

module.exports = function(router){
	//http://localhost:5000/polls
	//parte para grabar en base de datos
	router.post('/polls', function(req,res){
		var poll = new Poll();
		poll.parroquia = req.body.parroquia;
		sdig1 = req.body.sector.sdig1;
		sdig2 = req.body.sector.sdig2;
		sdig3 = req.body.sector.sdig3;

		zdig1 = req.body.zona.zdig1;
		zdig2 = req.body.zona.zdig2;
		zdig3 = req.body.zona.zdig3;

		dir1 = req.body.direccion.dir1;
		dir2 = req.body.direccion.dir2;
		
		poll.sector.push({dig1: sdig1, dig2: sdig2, dig3: sdig3});
		poll.zona.push({dig1: zdig1, dig2: zdig2, dig3: zdig3});
		poll.direccion.push({dir1: dir1, dir2: dir2})


		poll.comunidad = req.body.comunidad;
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