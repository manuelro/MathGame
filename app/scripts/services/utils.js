'use strict';

/**
 * @ngdoc service
 * @name gameApp.utils
 * @description
 * # utils
 * Factory in the gameApp.
 */
angular.module('gameApp')
  .factory('utils', function () {
    // Service logic
    // ...

    var matrix = function(limit) {
      var counter = 0;
      var collection = [];
      while(counter < limit) {
        collection.push(counter);
        counter++;
      }

      return collection;
    }

    var filterCollection = function (collection, prop, propValue){
      var result = [];
      angular.forEach(collection, function (value, key) {
        if(value[prop] == propValue) { 
          result.push(value);
        }
      });

      return result;
    }

    // Public API here
    return {
      matrix: matrix,
      filterCollection: filterCollection
    };
  });
