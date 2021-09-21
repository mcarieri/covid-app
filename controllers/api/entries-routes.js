const router = require('express').Router();
const { Entries } = require('../../models');

// GET all entries
router.get('/', (req, res) => {
  Entries.findAll({}).then(entries => {
    res.json(entries);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
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
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
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
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// POST entries
router.post('/', ({ body }, res) => {
  const { UserId, name, zipcode, date, mask, distance, sanitizer, patrons, comment } = body;
  Entries.create(
    {
      // comment in when login is functional
      // UserId = req.session.user_id,
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
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;