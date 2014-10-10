define(['require', 'angular', 'js/controllers', 'js/lazy'], function(require, angular) {
  require(['domReady!'], function (document) {
      angular.bootstrap(document, ['app']);
  });
});