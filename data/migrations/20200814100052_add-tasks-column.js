exports.up = function (knex) {
  return knex.schema.table('tasks', (table) => {
    table
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .defaultTo('1');
  });
};

exports.down = function (knex) {
  return knex.schema.table('tasks', (table) => {
    table.dropColumn('project_id');
  });
};
