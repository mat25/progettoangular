'use strict';

/**
 * @ngdoc function
 * @name photoAppApp.controller:PhotoCtrl
 * @description
 * # PhotoCtrl
 * Controller of the photoAppApp
 */
angular.module('photoAppApp')
  .controller('PhotoCtrl', function ($scope, $routeParams, photoAPI) {

    $scope.photo = photoAPI.getSinglephoto.get({id: $routeParams.id});


    $scope.photo.$promise.then( function(data) { $scope.photo = data });


  });
