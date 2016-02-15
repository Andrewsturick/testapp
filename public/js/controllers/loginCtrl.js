angular.module('testApp')
      .controller('loginCtrl', function($rootScope, $scope, loginService, $location){
        $scope.loginUser = function(){
          loginService.loginUser($scope.inputEmail, $scope.inputPassword).then(function(data){
            if(data.data!='incorrect'){
              $rootScope.userLoggedIn = data.data
              $location.path('/')
            }
          })
        }
      })
