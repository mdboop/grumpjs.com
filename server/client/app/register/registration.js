angular.module('grump.registration', [])

.controller('RegistrationController', function ($scope, $location) {
  $scope.username = "";
  $scope.password = "";
  $scope.email    = "";

  $scope.register = function() {
    console.log($scope.username);
  }
});