
var projects [];

function Project (proj) {
  this.projectTitle = proj.projectTitle;
  this.publishDate = proj.publishDate;
  this.projUrl = proj.projURL;
};

Project.prototype.toHtml= function() {
  var $newProject = $('project.template').clone();
  $newProject.arr()
}
