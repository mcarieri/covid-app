const router = require('express').Router();
const User = require('../models/user');
const Entries = require('../models/entries');

// GET all entries
router.get('/api/entries', (req, res) => {
  Entries.findAll({}).then(entries => {
    res.json(entries);
  });
});

router.get('/api/entries/:id', (req, res) => {
  Entries.findOne({
    where: {
      id: req.params.id
    }
  }).then(entries => {
    res.json(entries);
  });
});