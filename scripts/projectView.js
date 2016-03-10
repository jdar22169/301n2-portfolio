var projectView={};


projectView.navBar = function() {
  $('#nav-bar').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('#nav-bar.tab:first').click();
};

projectView.setTeasers = function() {
  $('.projectDescription *:nth-of-type(n+1)').hide();
  $('#projects').on('click', function(event) {
    var $eventTarget = $(event.target);
    event.preventDefault();
    if ($eventTarget.hasClass('more')){
      $eventTarget.prev().children().fadeIn(1000);
      $eventTarget.hide();
    };
  });
};

$(document).ready(function(){
  projectView.navBar();
  projectView.setTeasers();
});
