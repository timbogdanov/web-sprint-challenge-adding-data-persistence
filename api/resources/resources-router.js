const router = require('express').Router();

const Resources = require('./resources-model');

router.post('/', (req, res) => {
  Resources.addResource(req.body).then((resource) => {
    res.status(200).json({ message: 'added a resource' });
  });
});

router.get('/', (req, res) => {
  Resources.getResources().then((resources) => {
    res.status(200).json(resources);
  });
});

module.exports = router;
