
var projects=[];

function Project (proj) {
  this.projectTitle = proj.projectTitle;
  this.projectCategory = proj.projectCategory;
  this.publishedDate = proj.publishedDate;
  this.projectURL = proj.projectURL;
  this.body=proj.body;
};

Project.prototype.toHtml= function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.attr('data-category', this.projectCategory);
  $newProject.find('h3:first').text(this.projectTitle);
  $newProject.find('p a').attr('href', this.projectURL);
  $newProject.find('.projectDescription').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.publishedDate)
  $newProject.find('time[pubdate]').attr('title', this.publishedDate)
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedDate))/60/60/24/1000) + ' days ago')
  $newProject.append('<hr>');
  return $newProject;


};

rawData.sort(function(a,b) {
  return (new Date(b.publishedDate)) - (new Date(a.publishedDate));
});

rawData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml())
});
