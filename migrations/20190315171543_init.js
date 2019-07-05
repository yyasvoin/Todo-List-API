'use strict';

exports.up = function up(knex) {
  return knex.schema.createTable('items', (table) => {
    table
      .increments('id')
      .primary();
    table
      .string('name');
    table
      .string('description');
    table
      .boolean('isComplete')
      .defaultTo(false)
      .notNullable();
  });
};

exports.down = function down(knex) {
  return knex.schema.dropTableIfExists('items');
};
