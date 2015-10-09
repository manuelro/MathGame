'use strict';

/**
 * @ngdoc directive
 * @name gameApp.directive:grid
 * @description
 * # grid
 */
angular.module('gameApp')
  .directive('grid', function () {
    return {
      templateUrl: 'views/grid.html',
      restrict: 'E',
      scope: false,
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
