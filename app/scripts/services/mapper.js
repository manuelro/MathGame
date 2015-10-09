'use strict';

/**
 * @ngdoc service
 * @name gameApp.mapper
 * @description
 * # mapper
 * Factory in the gameApp.
 */
angular.module('gameApp')
  .factory('mapper', function () {
    // Service logic
    // ...

    var map = function(entry) {
      var obj = {};

      angular.forEach(entry, function(value, key){
        if(/^gsx\$/.test(key)){
          key = key.replace(/gsx\$/, '');
          if(/^[0-9]+$/.test(value.$t)) value.$t = Number(value.$t);

          if(/[0-9]+$/.test(key)){
            key = key.replace(/[0-9]+$/, '');

            if(!angular.isDefined(obj[key])) obj[key] = [];
            if(value.$t.length) obj[key].push(value.$t);
            
          } else {
            obj[key] = value.$t;
          }
        }
      });

      return obj;
    }

    // Public API here
    return {
      map: map
    };
  });
