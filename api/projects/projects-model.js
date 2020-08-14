const db = require('../../data/db-config');

module.exports = {
  getProjects,
  getProject,
  addProject,
  getTasks,
  getResources,
  addTask,
};

function getProjects() {
  return db('projects');
}

function getProject(id) {
  return db('projects').where({ id });
}

function addProject(data) {
  return db('projects').insert(data);
}

function getTasks(id) {
  return db('tasks').where('project_id', '=', id);
}

function addTask(data, id) {
  return db('tasks').where({ id }).insert(data);
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
