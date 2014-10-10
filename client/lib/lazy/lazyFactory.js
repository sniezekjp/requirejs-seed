define(['js/lazy'], function(app) {
  return app.factory('LoadLater', function($http) {
    return {
      request: function() {
        return $http.get('/something');
      }
    };
  });
});