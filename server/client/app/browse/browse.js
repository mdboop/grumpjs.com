angular.module('grump.browse', [])

.controller('BrowseController', function ($scope, Files) {
  $scope.grumps = [];
  $scope.filter = "General"

  $scope.getGrumps = function(){
    return Files.getGrumps().then(function (results) {
      $scope.grumps = results;

      //returning scope.grumps for testing...
      return $scope.grumps;
    });
  };

  $scope.filterGrumps = function() {
    // do something with the filter
    // will probably be doing filterng purely in view
  }
});
