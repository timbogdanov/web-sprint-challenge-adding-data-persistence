exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'wood', desciption: 'wood from trees' },
        { name: 'nails', desciption: 'nails from metal' },
        { name: 'oil', desciption: 'oil from ground' },
      ]);
    });
};
