'use strict';

/**
 * @ngdoc service
 * @name gameApp.Person
 * @description
 * # Person
 * Service in the gameAppApp.
 */
angular.module('gameApp')
  .service('Person', function (config, $resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return $resource(config.drive.path, {
    	spreadsheet_id: config.drive.person.spreadsheet_id,
    	worksheet_id: config.drive.worksheet_id
    });

  });
