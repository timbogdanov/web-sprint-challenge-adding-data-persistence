exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'build a birdhouse',
          description: 'simple instruction on building a birdhouse',
          completed: 'false',
        },
        {
          name: 'change car oil',
          description: 'project on changing car oil',
          completed: 'false',
        },
      ]);
    });
};
