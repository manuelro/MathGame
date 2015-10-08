'use strict';

/**
 * @ngdoc service
 * @name gameAppApp.mutator
 * @description
 * # mutator
 * Factory in the gameAppApp.
 */
angular.module('gameApp')
  .factory('mutator', function (mapper) {

    var mutate = function(data) {
      var arr = [];

      angular.forEach(data.feed.entry, function(value, key){
        arr.push(mapper.map(value));
      });

      return arr;
    }

    // Public API here
    return {
      mutate: mutate
    };
  });
