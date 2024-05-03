const express = require('express');
const router = express.Router();
const { Entertainment } = require('../models/index');

// RESTful route definitions
router.get('/entertainment', getEntertainment);
router.get('/entertainment/:id', getOneEntertainment);
router.post('/entertainment', createEntertainment);
router.put('/entertainment/:id', updateEntertainment);
router.delete('/entertainment/:id', deleteEntertainment);

// ROUTE HANDLERS
async function getEntertainment(request, response) {
  try {
    const entertainmentItems = await Entertainment.findAll();
    const data = { count: entertainmentItems.length, results: entertainmentItems };
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function getOneEntertainment(request, response) {
  try {
    const id = request.params.id;
    const entertainmentItem = await Entertainment.findOne({ where: { id: id } });
    if (entertainmentItem) {
      response.status(200).json(entertainmentItem);
    } else {
      response.status(404).json({ error: 'Entertainment item not found' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function createEntertainment(request, response) {
  try {
    const data = request.body;
    const newEntertainmentItem = await Entertainment.create(data);
    response.status(201).json(newEntertainmentItem);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function updateEntertainment(request, response) {
  // Implement your updateEntertainment handler logic here
}

async function deleteEntertainment(request, response) {
  // Implement your deleteEntertainment handler logic here
}

module.exports = router;
