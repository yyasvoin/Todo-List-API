'use strict';

const express = require('express');
const db = require('./db');

const router = express.Router();


// Gets all items
router.get('/item', (req, res, next) => {
  db.getItems()
    .then((items) => {
      res.json(items); // Shows all items in database
    })
    .catch(next);
});


// Gets one item by ID
router.get('/item/:id', (req, res, next) => {
  db.getItemById(req.params.id)
    .then((item) => {
      res.json(item);
    })
    .catch(next);
});


// Creates an item
router.post('/item', (req, res, next) => {
  db.createItem({
    name: req.body.name,
    description: req.body.description,
  })
    .then((newItem) => {
      res.json(newItem);
    })
    .catch(next);
});


// Deletes one item by ID
router.delete('/item/:id', (req, res, next) => {
  db.removeItemById(req.params.id).finally(() => {
    res.sendStatus('200');
    // This runs when the item is done deleting
  });
});


// Updates one item by ID
router.patch('/item/:id', (req, res, next) => {
  db.updateItemById(req.params.id, req.body)
    .then((newItem) => {
      res.json(newItem); // Item with the updated name field
    })
    .catch(next);
});


module.exports = router;
