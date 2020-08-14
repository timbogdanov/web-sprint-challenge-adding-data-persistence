const router = require('express').Router();

const Projects = require('./projects-model');

router.get('/', (req, res) => {
  Projects.getProjects().then((projects) => {
    res.status(200).json(projects);
  });
});

router.get('/:id', (req, res) => {
  Projects.getProject(req.params.id).then((project) => {
    res.status(200).json(project);
  });
});

router.get('/:id/tasks', (req, res) => {
  Projects.getTasks(req.params.id).then((tasks) => {
    res.status(200).json(tasks);
  });
});

router.get('/:id/resources', (req, res) => {
  Projects.getResources(req.params.id).then((resources) => {
    res.status(200).json(resources);
  });
});

router.post('/resources', (req, res) => {
  Projects.addResource(req.body).then((resource) => {
    res.status(200).json({ message: 'added a resource' });
  });
});

router.get('/resources', (req, res) => {
  Projects.getAllResources().then((resources) => {
    res.status(200).json(resources);
  });
});

module.exports = router;
