define(['js/lazy', 'active/activeFactory'], function(app) {
  app.controller('lazyController', function(LoadLater, ActiveFactory) {
    console.log('is active: ' + ActiveFactory.isActive());
    console.log('lazy controller loaded!');
    LoadLater.request().success(function(response) {
      console.log(response);
    });  
  });
});