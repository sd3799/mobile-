const express = require('express');
const router = express.Router();
const { getProducts } = require('../models/productModel');

router.get('/', async (req, res) => {
  try {
    const [rows] = await getProducts();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

module.exports = router;
