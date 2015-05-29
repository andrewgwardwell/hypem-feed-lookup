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
  .module('myHypemApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularCharts'
  ])
  .value('hypemURL', 'http://hypem.com/playlist/loved/drewsnooper/json/1/data.js')
  .factory('myTunes', function($resource, $routeParams){
    // I think that this is passing variables and I think that the @ songs mean that it is a string
    return $resource('http://hypem.com/playlist/:endpoint/:user/json/1/data.js', {endpoint: '@endpoint', user: '@user'});
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:endpoint/:username', {
        templateUrl: 'views/feed.html',
        controller: 'FeedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
