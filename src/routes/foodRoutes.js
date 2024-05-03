const express = require('express');
const router = express.Router();
const { Food } = require('../models/index');

// RESTful route definitions
router.get('/', getFood); // Removed redundant '/food' since it's already defined in the app.use()
router.get('/:id', getOneFood); // Updated route to use dynamic parameter
router.post('/', createFood); // Removed redundant '/food' since it's already defined in the app.use()
router.put('/:id', updateFood); // Updated route to use dynamic parameter
router.delete('/:id', deleteFood); // Updated route to use dynamic parameter

// ROUTE HANDLERS
async function getFood(request, response) {
  try {
    let foods = await Food.findAll();
    let data = { count: foods.length, results: foods };
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function getOneFood(request, response) {
  try {
    let id = request.params.id;
    let data = await Food.findOne({ where: { id: id } });
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function createFood(request, response) {
  try {
    let data = request.body;
    let newFood = await Food.create(data);
    response.status(201).json(newFood);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function updateFood(request, response) {
  // Implement your updateFood handler logic here
}

async function deleteFood(request, response) {
  // Implement your deleteFood handler logic here
}

module.exports = router;
