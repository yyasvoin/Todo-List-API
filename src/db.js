'use strict';

/**
 * It's not expected for you to understand anything in this file.
 * Refer to the documentation in the README.md file displayed on
 * the GitLab page for this repository for the usage of this API.
 */

const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig);


async function getItems() {
  return db('items');
}


async function getItemById(id) {
  return db('items')
    .where({ id })
    .then(([item]) => item);
}


async function createItem(item) {
  return db('items')
    .insert(item)
    .then(([id]) => getItemById(id));
}


async function updateItemById(id, item) {
  return db('items')
    .where({ id })
    .update(item)
    .then(() => getItemById(id));
}


async function removeItemById(id) {
  return db('items')
    .where({ id })
    .del();
}


module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItemById,
  removeItemById,
};
