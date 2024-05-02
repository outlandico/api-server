'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');

const foodRoutes = require('./routes/foodRoutes');
const entertainmentRoutes = require('./routes/entertainmentRoutes');

app.use(cors());
app.use(express.json());

app.use('/food', foodRoutes); // Mount food routes
app.use('/entertainment', entertainmentRoutes); // Mount entertainment routes

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
