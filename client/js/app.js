define(['angular', 'router'], function(angular) {
  return angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      
      $stateProvider
        .state('home', {
          url: '/',
          controller: 'MainCtrl',
          template: 'MainCtrl'
        })
        .state('lazy', {
          url: '/lazy',
          template: '<div lazy-directive></div>',
          resolve: {
            lazy: function(Lazy) {
              return Lazy.load('lazy/lazyModule');
            }
          },
          controller: 'lazyController'
        })
        .state('active', {
          url: '/active',
          template: '<div active-dir></div>',
          resolve: {
            ctrl: function(Lazy) {
              return Lazy.load('active/activeCtrl')
            },
            dir: function(Lazy) {
              return Lazy.load('active/activeDir')
            }
          },
          controller: 'activeCtrl'
        });

      $urlRouterProvider.otherwise('/');
    });
});