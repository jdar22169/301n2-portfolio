function Project (proj) {
  this.projectTitle = proj.projectTitle;
  this.projectCategory = proj.projectCategory;
  this.publishedDate = proj.publishedDate;
  this.projectURL = proj.projectURL;
  this.body = proj.body;
};

Project.all= [];

Project.prototype.toHtml= function() {
  var template = Handlebars.compile($('#projectsTemplate').html());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedDate))/60/60/24/1000);
  this.publishStatus = this.publishedDate ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  return template(this);

};

Project.loadAll = function(projectData) {

  projectData.sort(function(a,b) {
    return (new Date(b.publishedDate)) - (new Date(a.publishedDate));
  });

  projectData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });

};



Project.fetchAll = function() {
  if (localStorage.projectData) {
    Project.loadAll(JSON.parse(localStorage.projectData));
    projectView.initIndexPage();
  } else {
    $.getJSON('scripts/projectData.json', function(data) {
      Project.loadAll(data);
      localStorage.setItem('projectData', JSON.stringify(data));
      projectView.initIndexPage();
    });
  }
};
