exports.up = function (knex) {
  return knex.schema
    .createTable('projects', (table) => {
      table.increments('id').unique();

      table.string('name', 255).notNullable();
      table.text('description');
      table.boolean('completed').notNullable().defaultTo('false');
    })
    .createTable('project_resources', (table) => {
      table.increments('id').unique();

      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects');

      table
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources');
    })
    .createTable('resources', (table) => {
      table.increments('id').unique();

      table.string('name', 255).notNullable();
      table.text('desciption');
    })
    .createTable('tasks', (table) => {
      table.increments('id').unique();

      table.text('description').notNullable();
      table.text('notes');
      table.boolean('completed').notNullable().defaultTo('false');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('projects');
};
