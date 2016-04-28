(function(module) {
  var projectsController = {};
  projectsController.index = function(ctx, next) {
    projectView.index(ctx.project);
    // $('.tab-content').hide();
    // $('#projects').show();
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
    var projectData = function(project) {
      ctx.projects = project;
      next();
    };
    if(($('data-id').val()) === ctx.params.id) {
      return projectData;
    }
  };

  projectsController.loadTitle = function(ctx,next) {
    ctx.projects = Project.all;
    console.log(ctx.projects);
    // console.log('load try');
    // var titleData = function() {
    //   ctx.projects
    // }
    //
    if(($('#title-menu').val()) === ctx.params.projectTitle) {
      console.log('working');
      console.log(ctx.projects);
      console.log(ctx.params.projectTitle);
      $('#projects article').remove();
      $('#projects article').append(


    } else {
      console.log('not working');
    }

  };



  module.projectsController = projectsController;
})(window);
