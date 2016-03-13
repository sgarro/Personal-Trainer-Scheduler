// require('./app.js');
var mongoose = require('mongoose')
mongoose.connect('mongodb://Sgarro:sgarro24pwd@ds019468.mlab.com:19468/personaltrainer');
console.log(mongoose.connection.readyState)
// var Schema = mongoose.Schema;
// var clientSchema = new Schema ({
// 			avatar: String,
// 			nome: String,
// 			cognome: String,
// 			altezza: Number,
// 			peso: Number,
// 			telefono: Number,
// 			note: String,
// 			frequenza: Number,
// 			lipmin: Number,
// 			lipmax: Number,
// 			aeromin:Number,
// 			aeromax:Number,
// 			aneromin: Number,
// 			aneromax: Number
// });
var Schema = mongoose.Schema;
var clientSchema = new Schema ({
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

var client = mongoose.model('client', clientSchema)
var data = {nome:'Gianni'}
var user = new client(data);
// console.log(user)
// user.save(function (err) {
// if (err)
//   console.log(err)
// else
//   console.log('saved')
// })
//
// //     });
client.find({}, function (err, docs) {
	console.log('funzione')
		if (err)
			console.log(err)

		console.log(docs);

    });
