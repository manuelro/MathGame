'use strict';

/**
 * @ngdoc function
 * @name gameApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the gameApp
 */
angular.module('gameApp')
  .controller('GameCtrl', function (
  	$scope, 
  	config, 
  	Person, 
  	Exercise, 
  	mutator, 
  	randomizer,
    utils
  ){
  	var setPerson = function (){
      $scope.personsIndexMatrix = randomizer.matrix($scope.persons.length);
      $scope.currentPersonIndex = $scope.personsIndexMatrix[0];
      $scope.person = $scope.persons[$scope.personsIndexMatrix[0]];
      $scope.person.style = {
        'background-image': "url("+$scope.person.photourl+")"
      }

      setConfigGuessOptions();
    }

    var setConfigGuessOptions = function (){
      $scope.config.guess.options = randomizer.get($scope.persons, 4);
    }

    var setExercisesSet = function (){
      $scope.exercises = mutator.each($scope.exercises, {state: false, status: null, selected: null});
      $scope.exercisesSet = randomizer.get($scope.exercises, $scope.config.currentLevel.multiplicity);
      $scope.exercisesIndexMatrix = randomizer.matrix($scope.config.currentLevel.multiplicity);
      $scope.currentExerciseIndex = $scope.exercisesIndexMatrix[0]; 
      $scope.exercise = $scope.exercisesSet[$scope.exercisesIndexMatrix[0]];
    }

    var shuffleExercise = function (){
      $scope.exercisesIndexMatrix.shift();
      if($scope.exercisesIndexMatrix.length) {
        $scope.currentExerciseIndex = $scope.exercisesIndexMatrix[0];
        $scope.exercise = $scope.exercisesSet[$scope.currentExerciseIndex];
      } else {
        $scope.$broadcast('ExercisesSetEmpty');
      }

      console.log($scope.exercisesIndexMatrix);
    }

    var shufflePerson = function (){
      $scope.personsIndexMatrix.shift();
      if($scope.personsIndexMatrix.length) {
        $scope.currentPersonIndex = $scope.personsIndexMatrix[0];
        $scope.person = $scope.persons[$scope.currentPersonIndex];
        $scope.person.style = {
          'background-image': "url("+$scope.person.photourl+")"
        }
      } else {
        $scope.$broadcast('PersonsSetEmpty');
      }

      console.log($scope.personsIndexMatrix);
    }

    var answer = function (){
      $scope.exercise.state = true;

      if($scope.exercise.solution == $scope.exercise.selected) {
        $scope.exercise.status = true;
      } else {
        $scope.exercise.status = false;
      }

      shuffleExercise();

    }

    var guess = function (){
      $scope.gameEnded = true;
      $scope.showGuessOptions = false;
      $scope.guessed.status = true

      if($scope.config.guess.selected === $scope.person){ 
        $scope.guessed.result = true
      } else {
        $scope.guessed.result = false
      }


    }

    var getHint = function (){
      if($scope.person && $scope.person.hint && $scope.person.hint.length - $scope.usedHints > 0) {
        $scope.hint = $scope.person.hint[$scope.usedHints];
        $scope.showHint = true;
        $scope.usedHints++;
      }
    }

    var restart = function(){
      $scope.gameEnded = false;
      $scope.usedHints = 0;
      $scope.showHint = false;
      $scope.guessed = {};
      $scope.config.guess = {};
      setExercisesSet();
      setPerson();
    }

    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };

    var toggleGuessOptions = function (value){
      if(!angular.isDefined(value)) {
        $scope.showGuessOptions = !$scope.showGuessOptions;
      } else {
        $scope.showGuessOptions = value;
      }
    }

    var setRightAnswers = function (){
      $scope.rightOnes = utils.filterCollection($scope.exercisesSet, 'status', true);
      console.log($scope.rightOnes);
    }

    var getRightAnswers = function (){
      return utils.filterCollection($scope.exercisesSet, 'status', true);
    }

    $scope.persons = [];
    $scope.exercises = [];
  	$scope.config = config;
  	$scope.config.currentLevelIndex = 0;
    $scope.config.currentLevel = $scope.config.levels[$scope.config.currentLevelIndex];
    $scope.guessed = {};
    $scope.showGuessOptions = false;
    $scope.usedHints = 0;
    $scope.showHint = false;

    $scope.answer = answer;
    $scope.guess = guess;
    $scope.toggleGuessOptions = toggleGuessOptions;
    $scope.getHint = getHint;
    $scope.getRightAnswers = getRightAnswers;
    $scope.restart = restart;

  	Person.get(null, function (data){
  		$scope.persons = mutator.mutate(data);
      setPerson();
  	});

  	Exercise.get(null, function (data){
  		$scope.exercises = mutator.mutate(data);
      setExercisesSet();
  	});

    $scope.$watch('config.currentLevelIndex', function(){
      $scope.$broadcast('LevelChanged');
    }, true);

    $scope.$on('ExercisesSetEmpty', function(){
      $scope.gameEnded = true;
    });

    $scope.$on('LevelChanged', function(){
      $scope.config.currentLevel = $scope.config.levels[$scope.config.currentLevelIndex];
      if($scope.persons.length) restart();
    });

  });