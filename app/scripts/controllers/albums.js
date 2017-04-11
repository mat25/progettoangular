'use strict';

/**
 * @ngdoc function
 * @name photoAppApp.controller:AlbumsCtrl
 * @description
 * # AlbumsCtrl
 * Controller of the photoAppApp
 */
angular.module('photoAppApp')
  .controller('AlbumsCtrl', function ($scope,$routeParams, albumAPI) {

    $scope.albums = albumAPI.query();

    //console.log ($scope.albums);

    $scope.albums.$promise.then( function(data) {$scope.albums = data});


  });
