const db = require('../../data/db-config');

module.exports = {
  addResource,
  getResources,
};

function addResource(data) {
  return db('resources').insert(data);
}

function getResources() {
  return db('resources');
}
