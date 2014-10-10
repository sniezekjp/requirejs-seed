define(['js/app'], function(app) {
  app.controller('MainCtrl', function($scope, Lazy, $injector) {
    $scope.name = 'Main controller';
    $scope.lazyLoad = function() {
      Lazy.load('LoadLater').then(function(later) {
        later.request().success(function(data) {
          console.log(data);
        });
      });
    }
    $scope.getLazy = function() {
      var Later = $injector.get('LoadLater');
      Later.request().success(function(data) {
        console.log(data);
      });
    }
  });
});