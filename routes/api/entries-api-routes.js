const router = require('express').Router();
const { Entries } = require('../../models');

// GET all entries
router.get('/api/entries', (req, res) => {
  Entries.findAll({}).then(entries => {
    res.json(entries);
  });
});

// GET entries by id
router.get('/api/entries/:id', (req, res) => {
  Entries.findOne({
    where: {
      id: req.params.id
    }
  }).then(entries => {
    res.json(entries);
  });
});

// GET entries by zipcode
router.get('/api/entries/:zipcode', (req, res) => {
  Entries.findAll({
    where: {
      zipcode: req.params.zipcode
    }
  }).then(zipcode => {
    res.json(zipcode);
  });
});

// POST entries
router.post('/api/entries', ({ body }, res) => {
  const { name, zipcode, date, mask, distance, sanitizer, patrons, comment } = body;
  Entries.create(
    {
      name,
      zipcode,
      date,
      mask,
      distance,
      sanitizer,
      patrons,
      comment
    }
  ).then(dbres => {
      res.json(dbres)
  });
});