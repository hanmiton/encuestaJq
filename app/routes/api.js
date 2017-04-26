var Poll = require('../models/poll');

module.exports = function(router){
	//http://localhost:5000/polls
	//parte para grabar en base de datos
	router.post('/polls', function(req,res){
		var poll = new Poll();
		poll.parroquia = req.body.parroquia;
		poll.zona = req.body.zona;

		if(req.body.parroquia == null || req.body.zona == null){
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