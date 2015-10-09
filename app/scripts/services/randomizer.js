'use strict';

/**
 * @ngdoc service
 * @name gameApp.randomizer
 * @description
 * # randomizer
 * Factory in the gameApp.
 */
angular.module('gameApp')
  .factory('randomizer', function (utils) {
    // Service logic
    // ...

    var get = function(collection, limit) {
      var result = {};
      var rand = 0;
      if(!limit) limit = 1;
      if(limit > collection.length) limit = collection.length;

      if(angular.isArray(collection)) {
        if(collection.length >= limit) {
          
          collection.sort(function(){
            return Math.random() - 0.5;
          });

          if(limit == 1) {
            result = collection[0];
          } else if(limit > 1) {
            result = [];
            for (var i = 0; i < limit; i++) {
              result.push(collection[i]);
            };
          }
        } else {
          console.log('collection size is less than the limit');
        }
      }

      return result;

    }

    var number = function(limit) {
      return Math.floor(Math.random() * limit);
    }

    var matrix = function (limit){
      var matrix = utils.matrix(limit);
      matrix.sort(function(){
        return Math.random() - 0.5;
      });
      return matrix;
    }

    // Public API here
    return {
      get: get,
      number: number,
      matrix: matrix
    };
  });
