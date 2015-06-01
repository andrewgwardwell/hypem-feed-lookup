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
  .directive('feedCategoryForm', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './views/feedcategory.html',
  		controller: function($rootScope, $scope, $routeParams, myTunes){

    		$scope.catagories = [];

		  	// $rootScope.displayField = function(field_name){
		  	// 	if($scope[field_name]){
		   //         return true;
		  	// 	}
		  	// 		return false;
		  	// };
		  }
  	}
  });