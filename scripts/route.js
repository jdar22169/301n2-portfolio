page('/', homeController.loadSections, homeController.index);
page('/about', aboutController.index);
page('/projects', projectsController.loadProjectSection, projectsController.index);
page('/projects/:id', projectsController.loadById, projectsController.index);
page('/title', '/');
page('/title/:projectTitle', projectsController.loadTitle, projectsController.index);
page('/contact', contactController.index);
page();
