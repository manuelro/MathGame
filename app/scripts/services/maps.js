'use strict';

/**
 * @ngdoc service
 * @name gameApp.mapper
 * @description
 * # mapper
 * Constant in the gameApp.
 */
angular.module('gameApp')
  .constant('maps', {
  	person: [
	  	'name', 
	  	'description', 
	  	'occupation', 
	  	'photo', 
	  	'url', 
	  	'hints', 
	  	'website', 
	  	'wiki', 
	  	'yearnBorn', 
	  	'yearDead'
  	]
  });
