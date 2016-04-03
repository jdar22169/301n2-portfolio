(function(module) {
  var homeController = {};
  Project.fetchAll();
  homeController.index = function() {
    $('.tab-content').show();
  };
  module.homeController = homeController;
})(window);
