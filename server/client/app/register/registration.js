angular.module('grump.registration', [])

.controller('RegistrationController', function ($scope, $location, $http) {
  $scope.username = "";
  $scope.password = "";
  $scope.email    = "";

  $scope.register = function() {
    var user = {
      name:     $scope.username,
      password: $scope.password,
      email:    $scope.email
    }

    var successCallback = function() {

    }

    var errorCallback = function() {

    }

    $http.post('./api/register', user).then(successCallback, errorCallback);
  }
});