# Todo List API

This repository only comes with ESLint, git, and database configuration configuration. An API for the database has been provided for you in `src/db.js` Follow the steps below to complete the lab. Do not worry about what's in this file as well as anything in the `seeds` or `migrations` directories. Refer to hte documentation below.

***
- [Instructions](#instructions)
	- [Part One: Setup and Getting List Items](#part-one-setup-and-getting-list-items)
	- [Part Two: Creating, Updating, and Deleting List Items](#part-two-creating-updating-and-deleting-list-items)
	- [Part Three: Default Error Handler](#part-three-default-error-handler)
- [Database API Example Usage](#database-api-example-usage)
	- [Sample Item](#sample-item)
***




## Instructions

### Part One: Setup and Getting List Items

1. Setup an Express instance on port ***3000***
1. Create a module `src/routes.js`
	1. Export an instance of `express.Router` and use it in the Express application in `src/index.js`
	1. Implement the ***GET*** request with a path of `/item`
		1. Should respond in JSON with an array of all todo list items
		1. Must respond with **200** status code on success
	1. Implement the ***GET*** request with a path of `/item/:id`
		1. Should respond in JSON with a single item object
		1. Must respond with **200** status code on success




### Part Two: Creating, Updating, and Deleting List Items

1. Implement the **POST** request with a path of `/item`
	1. Should respond in JSON with a single JSON item object
	1. Must respond with a **201** status code on success
1. ***Define*** a **PUT** request with a path of `/item/:id`
	1. Should respond in JSON with a single JSON item object
	1. Must respond with a **200** status code on success
1. ***Define*** a **DELETE** request wiht a path of `/item/:id`
	1. Should respond with an empty body
	1. Must respond with a **204** status code regardless if the item existed or not



### Part Three: Default Error Handler

Add a [default error handler](https://expressjs.com/en/guide/error-handling.html#the-default-error-handler).




## Database API Example Usage

```js
'use strict';

const db = require('./db');

// Getting all items
db.getItems().then((items) => {
	console.log(items); // Shows all items in database
});

// Get item by ID
db.getItemById(updatedItem.id).then((item) => {
	console.log(item); // Shows a single item
});

// Create a new item
db.createItem({
	name: 'My New Item',
	description: 'A new thing for me to do.',
})
	.then((newItem) => {
		console.log(newItem); // Newly inserted item with all fields
	});

// Updates an existing item
db.updateItem({ ...item, name: 'The name has changed' });
	.then((updatedItem) => {
		console.log(updatedItem); // Item with the updated name field
	});

// Remove item
db.removeItemById(updatedItem.id).then(() => {
	// This runs when the item is done deleting
});
```


### Sample Item

```js
{
	id: 2,
	name: 'Example Item',
	description: 'The description is here!',
	isComplete: 0, // 1 if complete, else 0
}
```
