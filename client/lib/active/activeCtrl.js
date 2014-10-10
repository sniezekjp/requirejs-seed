define(['js/lazy', 'active/activeFactory'], function(app) {
  return app.controller('activeCtrl', function(ActiveFactory) {
    console.log('active controller loaded!'); 
    console.log('active: ' + ActiveFactory.isActive());
  });
});