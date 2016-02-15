angular.module('testApp')
      .service('registerService', function( $http){
        this.registerNewUser = function(email, password){
          		return $http.post(`/register`, {email: email, password: password});
        }
      })
