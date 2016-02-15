angular.module('testApp')
       .controller('homeCtrl', function($scope, beerService){
          beerService.getBeers().then(function(data){
            $scope.showingCurrently = angular.fromJson(data.data.body).data
          })
          $scope.notes = '';
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
            beerService.markSampled({name: $scope.showingCurrently.name, rating: $scope.currentRating, notes: $scope.notes})
          }
       })
