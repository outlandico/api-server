const express = require('express');
const router = express.Router();
const { Entertainment } = require('../models/index');

router.get('/entertainment', async (req, res) => {
  try {
    const entertainmentItems = await Entertainment.findAll();
    res.json(entertainmentItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
