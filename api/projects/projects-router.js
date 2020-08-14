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

module.exports = router;
