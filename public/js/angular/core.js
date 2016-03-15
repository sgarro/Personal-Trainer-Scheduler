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
        $.ajax({
            url: '/clients',
            dataType: 'json',
            type: 'post',
            contentType: 'application/x-www-form-urlencoded',
            data: $('#newClient'),
            success: function(data){
                console.log('fatto')
                console.log(data)
            },
            error: function(err){
                console.log('errore')
                console.log(err)
            }
        })
        // $http.post('/clients', $scope.formData)
        //     .success(function(data) {
        //         $scope.formData = {}; // clear the form so our user is ready to enter another
        //         $scope.clients.push(data);
        //         console.log(data);
        //         console.log($scope.clients)
        //         $('#addClient').closeModal();
        //     })
        //     .error(function(data) {
        //         console.log('Error: ' + data);
        //     });
    };

    // delete a todo after checking it
    // $scope.deleteTodo = function(id) {
    //     $http.delete('/api/todos/' + id)
    //         .success(function(data) {
    //             $scope.todos = data;
    //             console.log(data);
    //         })
    //         .error(function(data) {
    //             console.log('Error: ' + data);
    //         });
    // };

}
