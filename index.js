'use strict';

require('dotenv').config();

const {start} = require('./src/server.js');
const { db } = require('./src/models/index.js');

db.sync()
  .then( () => {
    start(process.env.PORT);
  })
  .catch(console.error);
