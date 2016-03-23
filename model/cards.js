var mongoose = require('mongoose');
//defining excercise model
var esercizioSchema = new mongoose.Schema({
  nome: String,
  ripetizioni: Number,
  peso: Number
},{_id: false});
//defining single day model with array of excercise
var giornoSchema = new mongoose.Schema({
  nome: String,
  esercizi: [esercizioSchema]
},{_id: false});
//defining card model with array of of single day
var cardSchema = new mongoose.Schema ({
  nome: String,
  giornate: [giornoSchema],
  inizio: Date,
  fine: Date
});

mongoose.model('Card', cardSchema);
