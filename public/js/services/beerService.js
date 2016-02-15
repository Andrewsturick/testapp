angular.module('testApp')
      .service('beerService', function($http){
        this.getBeers = function(){
          return $http.get('/beers')
        }
        this.markNotSampled = function(name){
          return $http.post('/beers/hasnottried')
        }
        this.markSampled = function(data){
          console.log(data);
          return $http.post('/beers/hastried', data)
        }
      })
