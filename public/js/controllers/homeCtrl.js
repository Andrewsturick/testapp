angular.module('testApp')
       .controller('homeCtrl', function($scope, beerService){
          beerService.getBeers().then(function(data){
            $scope.showingCurrently = angular.fromJson(data.data.body).data
          })
          $scope.hello = '';
          $scope.ratings = ['1','2', '3', '4', '5']
          $scope.thisRating = function(rating){
            $scope.currentRating = rating
          }
          $scope.hasSampled = function(){
            $scope.hasSampledThisBeer = true;
          }
          $scope.hasNotSampled = function(){
            $scope.hasSampledThisBeer = false;
            beerService.markNotSampled($scope.showingCurrently.name)
          }

          $scope.submitNotes = function(){
            console.log({name: $scope.showingCurrently.name, rating: $scope.currentRating, notes: $scope.hello})
          }
       })
