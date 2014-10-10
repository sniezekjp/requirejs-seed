define(['js/lazy'], function(app) {
  app.directive('activeDir', function() {
    return {
      restrict: "EA",
      link: function(scope, elm, attrs) {
        elm.html("active directive!");
      }
    };
  });
});