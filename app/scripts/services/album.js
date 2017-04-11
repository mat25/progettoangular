'use strict';

/**
 * @ngdoc service
 * @name photoAppApp.album
 * @description
 * # album
 * Factory in the photoAppApp.
 */
angular.module('photoAppApp')

  .factory('albumAPI', function ($resource) {

    return $resource('https://jsonplaceholder.typicode.com/albums/:id', { id: '@id' });


  })

  .factory('photoAPI', function ($resource) {

    return  {
        getSinglealbum: $resource('https://jsonplaceholder.typicode.com/photos/?albumId=:id', { id: '@id' }),
        getSinglephoto: $resource('https://jsonplaceholder.typicode.com/photos/:id', { id: '@id' })
    };

  });

