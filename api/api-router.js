const router = require('express').Router();

const projectsRouter = require('./projects/projects-router');
const resourcesRouter = require('./resources/resources-router');

router.use('/projects', projectsRouter);
router.use('/resources', resourcesRouter);

module.exports = router;
