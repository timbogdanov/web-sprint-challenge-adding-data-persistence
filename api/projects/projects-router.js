const router = require('express').Router();

const Projects = require('./projects-model');

router.post('/', (req, res) => {
  Projects.addProject(req.body).then((projects) => {
    res.status(200).json({ message: 'added a project' });
  });
});

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

router.post('/:id/tasks', (req, res) => {
  Projects.addTask(req.body, req.params.id).then((task) => {
    res.status(200).json(task);
  });
});

router.get('/:id/resources', (req, res) => {
  Projects.getResources(req.params.id).then((resources) => {
    res.status(200).json(resources);
  });
});

module.exports = router;
