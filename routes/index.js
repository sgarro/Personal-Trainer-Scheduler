var express = require('express');
var router = express.Router();
var glob = require('glob-promise')

/* GET home page. */
router.get('/', function(req, res, next) {
  var addominali = glob('./public/images/Esercizi/addominali/*.*').then(function(contents){

		for(i in contents){
			contents[i] = contents[i].replace('./public/images/Esercizi', '')
		}

		return contents

	});
	var bicipiti = glob('./public/images/Esercizi/bicipiti/*.*').then(function(contents){

		for(i in contents){
			contents[i] = contents[i].replace('./public/images/Esercizi', '')
		}

		return contents

	});
		var dorsali = glob('./public/images/Esercizi/dorsali/*.*').then(function(contents){

		for(i in contents){
			contents[i] = contents[i].replace('./public/images/Esercizi', '')
		}

		return contents

	});
		var gambe = glob('./public/images/Esercizi/gambe/*.*').then(function(contents){

		for(i in contents){
			contents[i] = contents[i].replace('./public/images/Esercizi', '')
		}

		return contents

	});
		var glutei = glob('./public/images/Esercizi/glutei/*.*').then(function(contents){

		for(i in contents){
			contents[i] = contents[i].replace('./public/images/Esercizi', '')
		}
		return contents

	});
		var lombari = glob('./public/images/Esercizi/lombari/*.*').then(function(contents){

		for(i in contents){
			contents[i] = contents[i].replace('./public/images/Esercizi', '')
		}

		return contents

	});
		var pettorali = glob('./public/images/Esercizi/pettorali/*.*').then(function(contents){

		for(i in contents){
			contents[i] = contents[i].replace('./public/images/Esercizi', '')
		}

		return contents

	});
		var spalle = glob('./public/images/Esercizi/spalle/*.*').then(function(contents){

		for(i in contents){
			contents[i] = contents[i].replace('./public/images/Esercizi', '')
		}

		return contents

	});
		var stretching = glob('./public/images/Esercizi/stretching/*.*').then(function(contents){

		for(i in contents){
			contents[i] = contents[i].replace('./public/images/Esercizi', '')
		}

		return contents

	});
		var tricipiti = glob('./public/images/Esercizi/tricipiti/*.*').then(function(contents){

		for(i in contents){
			contents[i] = contents[i].replace('./public/images/Esercizi', '')
		}

		return contents

	});
	Promise.all([addominali, bicipiti, dorsali, gambe, glutei, lombari, pettorali, spalle, stretching, tricipiti]).then(function(values){
    var variables = {}
    variables.addominali = values[0]
		variables.bicipiti = values[1]
		variables.dorsali = values[2]
		variables.gambe = values[3]
		variables.glutei = values[4]
		variables.lombari = values[5]
		variables.pettorali = values[6]
		variables.spalle = values[7]
		variables.stretching = values[8]
		variables.tricipiti = values[9]

	res.render('index', {
		files: variables});
	})
});

module.exports = router;
