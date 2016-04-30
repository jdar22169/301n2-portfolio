(function(module) {
  var homeController = {};

  homeController.loadSections = function(ctx, next) {
    var projectData = function(allProjects) {
      ctx.project = Project.all;
      next();
    };
    if(Project.all.length) {
      ctx.project = Project.all;
      next();
    } else {
      Project.fetchAll(projectData);
    };
    repo.request(repoView.index);
  };

  homeController.index = function() {
    homeView.index();

  };

  module.homeController = homeController;
})(window);
