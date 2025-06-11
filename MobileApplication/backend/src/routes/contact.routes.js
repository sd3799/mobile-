const express = require('express');
const router = express.Router();
const { saveContact } = require('../models/contactModel');

router.post('/', async (req, res) => {
  const { name, email, mobile, message } = req.body;
  try {
    await saveContact(name, email, mobile, message);
    res.status(201).send({ msg: 'Contact saved' });
  } catch (err) {
    res.status(500).send({ error: 'Failed to save contact' });
  }
});

module.exports = router;
