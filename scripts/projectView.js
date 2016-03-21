var projectView={};

projectView.titleMenu = function() {
  $('.project').each(function() {
    var title= $(this).find('#projTitle').text();
    var optionTag = '<option value="' + title + '">' + title + '</option>';
    $('#title-menu').append(optionTag);


  });
};

projectView.chooseTitle = function() {
  $('#title-menu').on('change', function() {
    if ($(this).val()) {
      $('#about').hide();
      $('#contact').hide();
      $('.project').hide();
      $('.project[data-title="' + $(this).val() + '"]').fadeIn();
    } else {
      $('.project').fadeIn();
    };
  });
};

projectView.homeTab = function() {
  $('#nav-bar .allContent').on('click', function() {
    $('.tab-content').show();

  });
};

projectView.navBar = function() {

  $('#nav-bar').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();

  });
  $('#nav-bar .allContent').click();
};

projectView.setTeasers = function() {
  $('.projectDescription *:nth-of-type(n+2)').hide();
  $('#projects').on('click', function(event) {
    var $eventTarget = $(event.target);
    event.preventDefault();
    if ($eventTarget.hasClass('more')){
      $eventTarget.prev().children().fadeIn(1000);
      $eventTarget.hide();
    };
  });
};

projectView.initIndexPage = function() {
  Project.all.forEach(function(a){
    $('#projects').append(a.toHtml());
  });

  projectView.titleMenu();
  projectView.chooseTitle();
  projectView.homeTab();
  projectView.navBar();
  projectView.setTeasers();
};
