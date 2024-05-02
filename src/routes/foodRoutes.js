const express = require('express');
const router = express.Router();
const { Food } = require('../models/index');

router.get('/food', async (req, res) => {
  try {
    const foodItems = await Food.findAll();
    res.json(foodItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
