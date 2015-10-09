angular.module('grump.auth', ['ngCookies', 'ngRoute'])

.controller('AuthController', function ($window, authFactory, $http, $scope, $cookies, $route) {
  //this sends the user to the github signin page
  $scope.username = "";
  $scope.password = "";
  $scope.loginFailed = false;

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
      if(response.data){
        var id = response.data;
        authFactory.login(id);
      }
      else {
        $scope.loginFailed = true;
      }
    }

    // handle an error on the post request
    var errorCallback = function() {

    }

    $http.post('/api/auth/login', data).then(successCallback, errorCallback);
  }
});


