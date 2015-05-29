'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */

angular.module('myHypemApp')
.directive('feedForm', function(){
	return {
        restrict: 'E',
        templateUrl: '/views/feedForm.html',
        controller: 'feedFormController',
        controllerAs: 'fdFormCtrl'
	};
})
.controller('feedFormController', function($scope, $location, $routeParams){
	var that = this,
	un = $routeParams.username,
	ep = $routeParams.endpoint;
	this.endpoint = typeof ep !== 'undefined' ? ep : 'loved';
	this.username = typeof un !== 'undefined' ? un : 'USERNAME';
	
	this.endpoint = 'loved';
	this.submitEndPoint = function(){
        $location.path('/'+that.endpoint+'/'+that.username);
	};
});