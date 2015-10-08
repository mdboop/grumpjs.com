angular.module('grump.auth', ['ngCookies'])

.controller('AuthController', function ($window, $http, $scope, $cookies) {
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
      name: $scope.username,
      password: $scope.password,
    };

    // on success of login, store the users u_id in the cookies for reference later on
    var successCallback = function(response) {
      var id = response.data;
      $cookies.put('id', id);
    }

    // handle an error on the post request
    var errorCallback = function() {

    }

    $http.post('/api/auth/login', data).then(successCallback, errorCallback);
  }
});


