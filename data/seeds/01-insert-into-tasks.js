exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: 'build the birdhouse',
          notes: 'instruction can be found in link',
          completed: false,
          project_id: 1,
        },
        {
          description: 'change the oil',
          notes: 'instruction can be found in link',
          completed: false,
          project_id: 2,
        },
      ]);
    });
};
