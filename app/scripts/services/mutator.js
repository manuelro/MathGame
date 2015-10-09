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

    var each = function(collection, props) {
      var obj;
      
      angular.forEach(collection, function (value, key){
        obj = value;
        angular.forEach(props, function(propValue, propKey){
          obj[propKey] = propValue;
        });
      });

      return collection;
    }

    var mutate = function(data, props) {
      var arr = [];
      var obj;
      if(!props) props = {};

      angular.forEach(data.feed.entry, function(value, key){
        obj = mapper.map(value);
        obj = each(obj, props);
        arr.push(obj);
      });

      return arr;
    }



    // Public API here
    return {
      mutate: mutate,
      each: each
    };
  });
