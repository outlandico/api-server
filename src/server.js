'use strict';

const express = require('express');
const cors = require('cors');

const { Food, Entertainment } = require('./models/index.js');

const app = express();

const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');

const foodRoutes = require('./routes/foodRoutes.js');
const entertainmentRoutes = require('./routes/entertainmentRoutes.js'); // Import entertainmentRoutes

app.use(cors());
app.use(express.json());

// Use foodRoutes for food_db
app.use('/food', foodRoutes); // Prefix the routes with '/food'

// Use entertainmentRoutes for entertainment_db
app.use('/entertainment', entertainmentRoutes); // Prefix the routes with '/entertainment'

// Force an error for the tests
app.get('/broken', (req, res, next) => next('whoops!'));

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`Server is up on ${port}`);
  });
}

module.exports = { app, start };
