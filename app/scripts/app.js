'use strict';

/**
 * @ngdoc overview
 * @name photoAppApp
 * @description
 * # photoAppApp
 *
 * Main module of the application.
 */
angular
  .module('photoAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])


  .config(function ($routeProvider) {
    //$locationProvider.html5Mode(true);
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
      .when('/albums/', {
        templateUrl: 'views/albums.html',
        controller: 'AlbumsCtrl',
        controllerAs: 'albums'
      })
      .when('/album/:id', {
        templateUrl: 'views/photos.html',
        controller: 'PhotosCtrl',
        controllerAs: 'photos'
      })
      .when('/photo/:id', {
        templateUrl: 'views/photo.html',
        controller: 'PhotoCtrl',
        controllerAs: 'photo'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .controller('appCtrl', function ($scope) {


    $scope.apps = {
      name: 'PhotoApp',
      title: 'A front-end Application that list Albums through REST API.',
      data: new Date()
    };

  });
