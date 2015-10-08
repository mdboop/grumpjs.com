angular.module('grump', [
  'grump.services',
  'grump.upload',
  'grump.browse',
  'grump.myGrumps',
  'grump.auth',
  'grump.token',
  'grump.errorPage',
  'grump.registration',
  'grump.verification',
  'ngRoute',
  'ngSanitize',
  'ngCookies',
  'btford.markdown'
])
.controller('MainController', function($scope, authFactory, $cookies, $window, $route){
  $scope.loggedIn = false;

  if($cookies.get("id")) {
    $scope.loggedIn = true;
  }

  $scope.$watch(authFactory.loggedIn(), function() {
    $scope.loggedIn = authFactory.loggedIn();
  });

  $scope.logoutUser = function() {
    authFactory.logout();
  }
})
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/gettingStarted', {
      templateUrl: 'app/gettingStarted/gettingStarted.html'
    })
    .when('/browse', {
      templateUrl: 'app/browse/browse.html',
      controller: 'BrowseController'
    })
    .when('/upload', {
      templateUrl: 'app/upload/upload.html',
      controller: 'UploadController'
    })
    .when('/signin', {
      templateUrl: 'app/auth/auth.html',
      controller: 'AuthController'
    })
    .when('/access_token=:accessToken', {
      template: '',
      controller: "TokenController"
    })
    .when('/mygrumps', {
      templateUrl: 'app/myGrumps/myGrumps.html',
      controller: "MyGrumpsController"
    })
    .when('/errorpage/:error?', {
      templateUrl: 'app/errorPage/errorpage.html',
      controller: "ErrorPageController"
    })
    .when('/register', {
      templateUrl: 'app/register/registration.html',
      controller: 'RegistrationController'
    })
    .otherwise({
        redirectTo : '/browse'
    });

  // $httpProvider.interceptors.push('AttachTokens');
}).run();