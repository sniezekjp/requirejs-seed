define(['js/lazy'], function(app) {
  return app.factory('ActiveFactory', function($http) {
    return {
      isActive: function() {
        return true;
      }
    };
  });
});