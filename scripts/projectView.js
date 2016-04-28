(function(module){
  var projectView = {};

  // var render = function(project) {
  //   var template = Handlebars.compile($('#projectsTemplate').text());
  //   project.daysAgo = parseInt((new Date() - new Date(project.publishedDate))/60/60/24/1000);
  //   project.publishStatus = project.publishedDate ? 'published ' + project.daysAgo + ' days ago' : 'Not yet published';
  //   return template(project);
  // };

  projectView.titleMenu = function() {

    var template = Handlebars.compile($('#titleFilterTemplate').text());
    var options = Project.all.map(function(project) { return template({title: project.projectTitle}); });
    if ($('#title-menu option').length < 2) {
      $('#title-menu').append(options);
    };
    // $('.project').each(function() {
    //   var title = $(this).find('#projTitle').text();
    //   var optionTag = '<option value = "' + title + '">' + title + '</option>';
    //   $('#title-menu').append(optionTag);
    // });
  };

  projectView.chooseTitle = function() {
    $('#title-menu').on('change', function() {
      resource = this.id.replace('-menu', '');
      page('/' + resource + '/' + $(this).val().replace(/\W+/g, '+'));
    });
    // $('#title-menu').on('change', function() {
    //   if ($(this).val()) {
    //     $('#about').hide();
    //     $('#contact').hide();
    //     $('.project').hide();
    //     $('.project[data-title = "' + $(this).val() + '"]').fadeIn();
    //   } else {
    //     $('.project').fadeIn();
    //   };
    // });
  };

  //projectView.setTeasers = function() {
  //   $('.projectDescription *:nth-of-type(n+2)').hide();
  //   $('#projects').on('click', function(event) {
  //     var $eventTarget = $(event.target);
  //     event.preventDefault();
  //     if ($eventTarget.hasClass('more')){
  //       $eventTarget.prev().children().fadeIn(1000);
  //       $eventTarget.hide();
  //     };
  //   });
  // };


  projectView.index = function() {
    console.log('projectIndex working');
    // $('#projectButton').on('click', function() {
    //   console.log('click');
    //   $('.tab-content').hide();
    //
    // });
    $('.tab-content').hide();
    $('#projects').show();
    $('#projects article').remove();
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });

    // $('#projectButton').on('click', function() {
    //   console.log('click');
    //   $('.tab-content').hide();
    //   $('#projects').show();
    // });


    $('#fact').text(Project.numProjects().length);
    projectView.titleMenu();
    projectView.chooseTitle();
    if ($('#project').length > 2) {
      $('.projectDescription *:nth-of-type(n+2)').hide();
    };

    //projectView.setTeasers();
  };
  module.projectView = projectView;
})(window);
