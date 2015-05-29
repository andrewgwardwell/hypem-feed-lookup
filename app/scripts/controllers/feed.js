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
  .controller('FeedCtrl', function($scope, $routeParams, myTunes){
  	
  	var that = this;


    myTunes.get({endpoint:$routeParams.endpoint, user:$routeParams.username}, function(res){
    	that.items = [];
    // Needs to be an array therefore we are taking values and throwing them into []
		    if (res){
    		    angular.forEach(res, function (item, key) {
			        if (item.title) {
			            that.items.push(item);
			        }
		   		});
    		}
    });
  	this.items = '';
  });