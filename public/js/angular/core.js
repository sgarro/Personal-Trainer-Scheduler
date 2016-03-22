// #AngularJS:20 upload avatars issue:1
// #AngularJS: get info for single client
// #AngularJS: Drag n drop to create new card
var fitnessScheduler = angular.module('fitnessScheduler', ['file-model', "ngAnimate"]);

function mainController($scope, $http) {
    // when landing on the page, get all todos and show them
    $http.get('/clients')
        .success(function(data) {
            $scope.clients = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createClient = function() {

        $http.post('/clients', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.clients.push(data);
                console.log(data);
                console.log($scope.clients)
                $('#addClient').closeModal();
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.removeClient = function(client) {
        console.log(client.avatar)
        $http.delete('/clients/' + client._id)
            .success(function(data) {
                $scope.clients.splice($scope.clients.indexOf(client), 1);
                $scope.showClient(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    //get Client
    $scope.getClient = function(id){
        $http.get('/clients/' + id)
            .success(function(data){
                $scope.showClient(data);
            })
            .error(function(data){
                window.alert('Error: ' + data);
            });
    };
}
