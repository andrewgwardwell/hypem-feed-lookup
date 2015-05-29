'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('myHypemApp')
  .controller('FeedDisplayController', function($rootScope, $scope, $routeParams, myTunes){
    $scope.artist = true;
    $scope.title = true;
    $scope.description = true;
    $scope.image = true;
    $scope.loved_count = true;

  	$rootScope.displayField = function(field_name){
  		if($scope[field_name]){
           return true;
  		}
  			return false;
  	};
  });