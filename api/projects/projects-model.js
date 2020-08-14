const db = require('../../data/db-config');

module.exports = {
  getProjects,
  getProject,
  getTasks,
  getResources,
  addResource,
  getAllResources,
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

function getResources(id) {
  return db('resources')
    .where('project_resources.project_id', '=', id)
    .join(
      'project_resources',
      'resources.id',
      '=',
      'project_resources.resource_id'
    );
}

function addResource(data) {
  return db('resources').insert(data);
}

function getAllResources() {
  return db('resources');
}
