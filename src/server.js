'use strict';

const express = require('express');
const cors = require('cors');

const { Food, Entertainment } = require('./models/index.js');

const app = express();

const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');

const foodRoutes = require('./routes/foodRoutes.js');
const entertainmentRoutes = require('./routes/entertainmentRoutes.js');


app.use(cors());
app.use(express.json());

// Use foodRoutes for food_db
app.use('/food',foodRoutes);

// Use entertainmentRoutes for entertainment_db
app.use( '/entertainment',entertainmentRoutes);

// // Utilize the Food and Entertainment models somewhere in your code to resolve the ESLint warnings
// // For example, you can log the model instances:
console.log(Food);
console.log(Entertainment);

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
