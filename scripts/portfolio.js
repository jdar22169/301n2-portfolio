
var projects=[];

function Project (proj) {
  this.projectTitle = proj.projectTitle;
  this.projectCategory = proj.projectCategory;
  this.publishedDate = proj.publishedDate;
  this.projectURL = proj.projectURL;
  this.body = proj.body;
};

Project.prototype.toHtml= function() {
  var template = Handlebars.compile($('#projectsTemplate').html());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedDate))/60/60/24/1000);
  this.publishStatus = this.publishedDate ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  return template(this);

};

rawData.sort(function(a,b) {
  return (new Date(b.publishedDate)) - (new Date(a.publishedDate));
});

rawData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
