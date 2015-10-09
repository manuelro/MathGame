'use strict';

/**
 * @ngdoc service
 * @name gameApp.config
 * @description
 * # config
 * Value in the gameAppApp.
 */
angular.module('gameApp')
  .value('config', {
  	drive: {
  		path: 'https://spreadsheets.google.com/feeds/list/:spreadsheet_id/:worksheet_id/public/full?alt=json',
  		worksheet_id: 'otmqqu9',
    	person: {
    		spreadsheet_id: '1eEyOzAWMGNqPY_k5Bo8NDeKa-1XX-AOOjcYNktkCnfU',
    	},
    	exercise: {
    		spreadsheet_id: '1nmyQWusEsN1FIPwKchuDo5DUubf78IDdUY8vqYjcvGw',
    	}
  	},
  	levels: [
  		{factor: 2, multiplicity: 2*2, name: 'Easy'},
  		{factor: 3, multiplicity: 3*3, name: 'Medium'},
  		{factor: 4, multiplicity: 4*4, name: 'Hard'}
  	],
  	guess: {}
  });
