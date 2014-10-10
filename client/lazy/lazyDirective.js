define(['js/lazy'], function(app) {
  app.directive('lazyDirective', function() {
    return {
      restrict: "EA",
      link: function(scope, elm, attrs) {
        elm.html("Lazy directive!");
      }
    };
  });
});