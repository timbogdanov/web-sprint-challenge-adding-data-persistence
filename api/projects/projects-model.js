const db = require('../../data/db-config');

module.exports = {
  getProjects,
  getProject,
  getTasks,
};

function getProjects() {
  return db('projects');
}

function getProject(id) {
  return db('projects').where({ id });
}

function getTasks(id) {
  return db('tasks').where('project_id', '=', id);
}
