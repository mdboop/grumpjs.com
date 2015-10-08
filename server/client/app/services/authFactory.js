(function() {
  'use strict';

  angular.module('grump.verification', ['ngCookies', 'ngRoute'])
  .factory('authFactory', authFactory);

  function authFactory($cookies, $window) {
    var services = {
      login: login,
      logout: logout,
      loggedIn: loggedIn
    };

    return services;

    var loggedIn = false;

    function login(id) {
      $cookies.put('id', id);
      $window.location.replace('#/mygrumps');
      loggedIn = true;
    }

    function logout() {
      $cookies.remove("id");
      $window.location.replace('#/');
      loggedIn = false;
    }

    function loggedIn() {
      return loggedIn;
    }
  }

})();