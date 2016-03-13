// function ContactController($scope) {
//       $scope.contacts = ["hi@email.com", "hello@email.com"];
//       $scope.add = function() {
//       $scope.contacts.push($scope.newcontact);
//       $scope.newcontact = "";
//       }
//   }
require('app.js');
var mongoose = require('mongoose');
console.log(mongoose.connection.readyState)