angular.module('testApp')
      .controller('registerCtrl', function($scope, registerService){
        $scope.registerUser = function(){
          registerService.registerNewUser($scope.inputEmail, $scope.inputPassword).then(function(data){
            if(data=="success!"){
              $state.go('/login')
            }
            if(data="alreadyTaken!"){
              console.log('try again!')
            }
          })
        }
      })
