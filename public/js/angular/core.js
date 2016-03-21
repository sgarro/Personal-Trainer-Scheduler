var fitnessScheduler = angular.module('fitnessScheduler', ['file-model']);

function mainController($scope, $http) {
    $scope.formData = {};

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
        console.log(client._id)
        $http.delete('/clients/' + client._id)
            .success(function(data) {
                $scope.clients.splice($scope.clients.indexOf(client), 1);
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}
