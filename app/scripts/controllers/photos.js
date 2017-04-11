'use strict';

/**
 * @ngdoc function
 * @name photoAppApp.controller:PhotosCtrl
 * @description
 * # PhotosCtrl
 * Controller of the photoAppApp
 */
angular.module('photoAppApp')
  .controller('PhotosCtrl', function ($scope,$routeParams, photoAPI) {

    // $scope.photos = photo.query({id: $routeParams.id});

    $scope.photos = photoAPI.getSinglealbum.query({id: $routeParams.id});

    $scope.photos.$promise.then( function(data) { $scope.photos = data });



  });
