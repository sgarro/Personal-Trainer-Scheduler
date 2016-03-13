var mongoose = require('mongoose');
var clientSchema = new mongoose.Schema ({
			avatar: String,
			nome: String,
			cognome: String,
			altezza: Number,
			peso: Number,
			telefono: Number,
			note: String,
			frequenza: Number,
			lipmin: Number,
			lipmax: Number,
			aeromin:Number,
			aeromax:Number,
			aneromin: Number,
			aneromax: Number
});

mongoose.model('Client', clientSchema);
