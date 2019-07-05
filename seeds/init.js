'use strict';

exports.seed = function seed(knex) {
  return knex('items').del()
    .then(() => knex('items').insert([
      {
        name: 'Clean up room',
        description: 'Go into my room and clean it up',
      },
      {
        name: 'Reply to recruiter',
        description: 'Respond to an email recieved yesterday about a potential job',
      },
      {
        name: 'Buy cat food',
        description: 'Because she deserves it',
      },
    ]));
};
