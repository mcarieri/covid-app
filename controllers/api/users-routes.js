const router = require('express').Router();
const { Users } = require('../../models');

// GET all users
router.get('/', (req, res) => {
  Users.findAll({}).then(users => {
    res.json(users);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
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
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
  ;
});

router.post('/', (req, res) => {
  console.log(req.body);
  Users.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
   dbUserData = dbUserData.get({plain:true})
    console.log(dbUserData);
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.name = dbUserData.name;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;    
        console.log(req.session.user_id, req.session.name);
        res.json(dbUserData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router;