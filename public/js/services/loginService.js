angular.module('testApp')
      .service('loginService', function( $http){
        this.loginUser = function(email, password){
          		return $http.post(`/login`, {email: email, password: password});
        }
      })
