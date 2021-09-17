const router = require('express').Router();
const Users = require('../models/users');
const Entries = require('../models/entries');

// GET all users
router.get('/api/user', (req, res) => {
  User.findAll({}).then(users => {
    res.json(users);
  });
});

router.get('/api/user/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  }).then(users => {
    res.json(users);
  });
});