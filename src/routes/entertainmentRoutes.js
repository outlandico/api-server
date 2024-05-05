'use strict';

const express = require('express');
const router = express.Router();
const { Entertainment } = require('../models/index.js');

// Example route handler for the default entertainment route
router.get('/', (req, res) => {
  res.send('Entertainment route');
});

// RESTful route definitions for "entertainment"
router.get('/entertainment', getEntertainment);
router.get('/entertainment/:id', getOneEntertainment);
router.post('/entertainment', createEntertainment);
router.put('/entertainment/:id', updateEntertainment);
router.delete('/entertainment/:id', deleteEntertainment);

// Route handlers for "entertainment" CRUD operations
async function getEntertainment(request, response) {
  let data = await Entertainment.findAll();
  response.status(200).json(data);
}

async function getOneEntertainment(request, response) {
  let id = request.params.id;
  let data = await Entertainment.findOne({ where: { id: id } });
  response.status(200).json(data);
}

async function createEntertainment(request, response) {
  let data = request.body;
  let newEntertainment = await Entertainment.create(data);
  response.status(201).json(newEntertainment);
}

async function updateEntertainment(request, response) {
  let id = request.params.id;
  let data = request.body;
  let entertainment = await Entertainment.findOne({ where: { id: id } });
  let updatedEntertainment = await entertainment.update(data);
  response.status(200).json(updatedEntertainment);
}

async function deleteEntertainment(request, response) {
  let id = request.params.id;
  let deletedEntertainment = await Entertainment.destroy({ where: { id: id } });
  if (typeof deletedEntertainment === 'number') {
    response.status(204).send(null);
  } else {
    throw new Error('Error deleting record');
  }
}

module.exports = router;
