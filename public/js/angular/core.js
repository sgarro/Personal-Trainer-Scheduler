// #AngularJS:10 upload avatars issue:1
// #Done:40 get info for single client
// #AngularJS:0 Drag n drop to create new card
var fitnessScheduler = angular.module('fitnessScheduler', ['file-model', "ngAnimate", 'angular-loading-bar', 'ui.tree'])
// .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
//     cfpLoadingBarProvider.parentSelector = '#main';
//     cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Custom Loading Message...</div>';
//   }]);

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
    //#AngularJS:20 validate form
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
    // #Done:50 edit client info
    $scope.updateClient = function(){
        var client = $scope.clients.selected
        $http.put('/clients/' +client._id, client)
            .success(function(data) {
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        };
    $scope.card = ''




    $scope.createCard = function() {
    //#AngularJS:20 validate form
        console.log($scope.newScheda)
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

    $scope.esercizi = [];
    // TODO:0 scope giornata: puntatore a giornata corrente con click sui titoli

    $scope.pointer = 0;
    $scope.giornate=[];
    $scope.giornate[0] = {'nome' : 'Riscaldamento', esercizi : []}
    $scope.addExcercise = function (file){

        esercizio = {'tipo': file}
        console.log('LUNGHEZZA')
        g = $scope.pointer
        $scope.giornate[g].esercizi.push(esercizio)
  };

  $scope.selectDay = function(index){
     $scope.pointer = index;
  };

  $scope.addDay = function(){
      $scope.pointer = $scope.giornate.length
      giornata = {'nome' : 'Giorno '+$scope.giornate.length, esercizi : []}
      $scope.giornate.push(giornata)




  };

  $scope.saveCard = function(){
    console.log('NOME CARD')
    console.log($scope.card)
    card = $scope.card
    card.giornate = $scope.giornate
    // console.log($.extend($scope.card, $scope.giornate))
    // TODO: inviare al server
    console.log(card)
  }
    //get all cards
    // $scope.getCard = function() {
    //     $http.get('/cards')
    //         .success(function(data) {
    //             $scope.cards = data;
    //             console.log(data);
    //         })
    //         .error(function(data) {
    //             console.log('Error: ' + data);
    //         });
    //
    //
    //
    //
    // };
    $http.get('/cards')
        .success(function(data) {
            $scope.cards = data;
            console.log(data);
            // $('select').material_select();
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
        $scope.giornata = ''

        $scope.card = []
}


fitnessScheduler.directive("contenteditable", function() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {

      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };

      element.bind("blur keyup change", function() {
        scope.$apply(read);
      });
    }
  };
});
