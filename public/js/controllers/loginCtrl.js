angular.module('testApp')
      .controller('loginCtrl', function($scope, loginService, $location){
        $scope.loginUser = function(){
          loginService.loginUser($scope.inputEmail, $scope.inputPassword).then(function(data){
            if(data.data!='incorrect'){
              $location.path('/')
            }
          })
        }
      })
