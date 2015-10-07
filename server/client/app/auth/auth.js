angular.module('grump.auth', [])

.controller('AuthController', function ($window, $http, $scope) {
  //this sends the user to the github signin page
  $scope.username = "";
  $scope.password = "";

  $scope.githubLogin=function() {
    var scope = "user:email"; // this sets meta-data we are able to access about user through github api
    var clientID = "61c332d3744979e21dfc";
    var url = "https://github.com/login/oauth/authorize?client_id="+clientID+"&scope="+scope;
    $window.location.replace(url);
  };

  $scope.login = function() {
    var data = {
      username: $scope.username,
      password: $scope.password
    };

    var successCallback = function() {

    }

    var errorCallback = function() {

    }

    $http.post('/api/auth', data).then(successCallback, errorCallback);
  }
});


