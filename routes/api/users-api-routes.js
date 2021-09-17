const router = require('express').Router();
const { Users } = require('../../models/users');

// GET all users
router.get('/api/user', (req, res) => {
  Users.findAll({}).then(users => {
    res.json(users);
  });
});

// GET user by id
router.get('/api/user/:id', (req, res) => {
  Users.findOne({
    where: {
      id: req.params.id
    }
  }).then(users => {
    res.json(users);
  });
});

