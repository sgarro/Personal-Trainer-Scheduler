// require('./app.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://Sgarro:sgarro24pwd@ds019468.mlab.com:19468/personaltrainer');
cient.log(mongoose.connection.readyState)
