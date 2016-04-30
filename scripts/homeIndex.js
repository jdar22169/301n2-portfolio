(function(module) {
  var homeView = {};
  homeView.index = function() {
    $('.tab-content').show();
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
    projectView.titleMenu();
    projectView.chooseTitle();
  };
  module.homeView = homeView;
})(window);
