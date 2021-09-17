const router = require('express').Router();
const { Users } = require('../../models');

// GET all users
router.get('/', (req, res) => {
  Users.findAll({}).then(users => {
    res.json(users);
  });
});

// GET user by id
router.get('/:id', (req, res) => {
  Users.findOne({
    where: {
      id: req.params.id
    }
  }).then(users => {
    res.json(users);
  });
});

router.post('/', (req, res) => {
  Users.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json(dbUserData);
      });
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router;