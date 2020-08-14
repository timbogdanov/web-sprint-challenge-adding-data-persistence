const router = require('express').Router();

const projectsRouter = require('./projects/projects-router');

router.use('/projects', projectsRouter);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'api up' });
});

module.exports = router;
