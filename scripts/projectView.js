(function(module){
  var projectView = {};

  projectView.titleMenu = function() {

    var template = Handlebars.compile($('#titleFilterTemplate').text());
    var options = Project.all.map(function(project) { return template({title: project.projectTitle}); });
    if ($('#title-menu option').length < 2) {
      $('#title-menu').append(options);
    };
  };

  projectView.chooseTitle = function() {
    $('#title-menu').on('change', function() {
      resource = this.id.replace('-menu', '');
      page('/' + resource + '/' + $(this).val().replace(/\W+/g, '+'));
    });
  };

  projectView.index = function() {
    $('.tab-content').hide();
    $('#projects').show();
    $('#projects article').remove();
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
    $('#fact').text(Project.numProjects().length);
    projectView.titleMenu();
    projectView.chooseTitle();
    if ($('#project').length > 1) {
      $('.projectDescription *:nth-of-type(n+2)').hide();
    };
  };
  module.projectView = projectView;
})(window);
