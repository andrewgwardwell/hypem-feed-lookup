'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('myHypemApp')
  .controller('MainCtrl', function ($scope, $http, myTunes) {
    
    $scope.data = [];

    $scope.tab = 'loved_count';
    $scope.isActive = function(arg){
    	return arg == $scope.$parent.tab;
    }
    myTunes.get(function(res){
    // Needs to be an array therefore we are taking values and throwing them into []
    angular.forEach(res, function (item, key) {
        if (item.title) {
            $scope.data.push(item);
        }
        });
    });
  })
  .controller('sortingForm', function($scope, $filter){
    var that = this;

    var orderBy = $filter('orderBy');

    this.sortingSubmit = function(){
    	var res = that.sorting.text;
    	if (res == 'Loved Count'){
    		var val = 'loved_count';
    	} else if (res == 'Artist'){
			var val = 'artist';
    	} else {
			var val = 'title';
    	}

    	$scope.$parent.tab = val;
    }

    this.sorting = {
    	text: 'Nothing Yet'
    }

  });
