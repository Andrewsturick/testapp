angular.module('testApp')
      .service('beerService', function($http){
        this.getBeers = function(){
          return $http.get('/beers')
        }
        this.markNotSampled = function(name){
          console.log(name);
        }
      })
