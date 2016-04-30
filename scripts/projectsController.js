(function(module) {
  var projectsController = {};
  projectsController.index = function(ctx, next) {
    projectView.index(ctx.project);
  };

  projectsController.loadProjectSection = function(ctx, next) {
    var projectData = function(allProjects) {
      ctx.project = Project.all;
      next();
    };
    if(Project.all.length) {
      ctx.project = Project.all;
      next();
    } else {
      Project.fetchAll(projectData);
    }
  };

  projectsController.loadById = function(ctx, next) {

    if(($('data-id').val()) === ctx.params.id) {
      return ctx.project;
    }
    next();
  };

  projectsController.loadTitle = function(ctx,next) {
    ctx.project = Project.all;
    if(ctx.params.projectTitle) {
      localStorage.getItem('projectData');
      $('#project article').remove();
      return ctx.params.projectTitle;
    }
  };

  module.projectsController = projectsController;
})(window);
