const router = require('express').Router();

const Projects = require('./projects-model');

router.get('/', (req, res) => {
  Projects.getProjects().then((projects) => {
    res.status(200).json(projects);
  });
});

module.exports = router;
