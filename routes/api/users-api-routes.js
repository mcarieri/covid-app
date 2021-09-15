const router = require('express').Router();
const User = require('../models/User');
const Entries = require('../models/Entries');

// GET all users
router.get('/api/user', (req, res) => {
  User.findAll({}).then(users => {
    res.json(users);
  });
});

router.get('/api/user/:id', (req, res) => {
  
})