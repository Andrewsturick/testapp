angular.module('testApp')
      .controller('registerCtrl', function($scope, registerService, $location){
        $scope.registerUser = function(){
          registerService.registerNewUser($scope.inputEmail, $scope.inputPassword).then(function(data){
            if(data.data=="success!"){
              $location.path('/login')
            }
            if(data=="alreadyTaken!"){
              console.log('try again!')
            }
          })
        }
      })
