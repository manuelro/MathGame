'use strict';

/**
 * @ngdoc function
 * @name gameApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the gameApp
 */
angular.module('gameApp')
  .controller('GameCtrl', function ($scope, Person, Exercise, mutator) {
  	Person.get(null, function (data){
  		console.log(mutator.mutate(data));
  		$scope.persons = mutator.mutate(data);
  	});

  	Exercise.get(null, function (data){
  		console.log(mutator.mutate(data));
  		$scope.exercises = mutator.mutate(data);
  	});
  });