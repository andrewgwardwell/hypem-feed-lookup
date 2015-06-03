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
  .directive('feedBlogNames', function(){
  	return {
  		restrict: 'E',
  		templateUrl: './views/feedBlogNames.html',
      scope: {
        items : '='
      },
      controller: function($scope){
         
      },
  	}
  });