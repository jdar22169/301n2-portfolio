(function(module) {
  var homeView = {};
  homeView.index = function() {
    $('.tab-content').show();
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
  };
  module.homeView = homeView;
})(window);
