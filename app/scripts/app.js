'use strict';

/**
 * @ngdoc overview
 * @name gameAppApp
 * @description
 * # gameAppApp
 *
 * Main module of the application.
 */
angular
  .module('gameApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngMaterial',
    'ngResource'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
