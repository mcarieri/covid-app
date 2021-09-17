const router = require('express').Router();
const { Entries } = require('../../models');

// GET all entries
router.get('/', (req, res) => {
  Entries.findAll({}).then(entries => {
    res.json(entries);
  });
});

// GET entries by id
router.get('/:id', (req, res) => {
  Entries.findOne({
    where: {
      id: req.params.id
    }
  }).then(entries => {
    res.json(entries);
  });
});

// GET entries by zipcode
router.get('/:zipcode', (req, res) => {
  Entries.findAll({
    where: {
      zipcode: req.params.zipcode
    }
  }).then(zipcode => {
    res.json(zipcode);
  });
});

// POST entries
router.post('/', ({ body }, res) => {
  const { UserId, name, zipcode, date, mask, distance, sanitizer, patrons, comment } = body;
  Entries.create(
    {
      UserId,
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

module.exports = router;