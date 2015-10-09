'use strict';

/**
 * @ngdoc directive
 * @name gameApp.directive:exercise
 * @description
 * # exercise
 */
angular.module('gameApp')
  .directive('exercise', function () {
    return {
      templateUrl: 'views/exercise.html',
      restrict: 'E',
      scope: false,
      link: function postLink(scope, element, attrs) {
        //element.text('this is the exercise directive');
      }
    };
  });
