'use strict';

/**
 * @ngdoc service
 * @name gameApp.Exercise
 * @description
 * # Exercise
 * Service in the gameApp.
 */
angular.module('gameApp')
  .service('Exercise', function (config, $resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(config.drive.path, {
    	spreadsheet_id: config.drive.exercise.spreadsheet_id,
    	worksheet_id: config.drive.worksheet_id
    });
    
  });
