'use strict';

const express = require('express');
const router = require('./router');

const app = express();

// Add middleware to parse JSON
app.use(express.json());

// Add router as middleware
app.use(router);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`TODO List API started on port ${port}.`);
});
