const { Entries } = require('../models');
let router = require('express').Router();
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/index', function (req, res) {
    res.render('index');
});

router.get('/search', function (req, res) {
    res.render('search');
});

router.get('/login', function (req, res) {
    res.render('login');
});

router.get('/post', function (req, res) {
    res.render('post');
});

router.get('/dashboard', function (req, res) {
    let user = {
        id: req.session.user_id,
        name: req.session.name,
        email: req.session.email
    }
    console.log(user);
    res.render('dashboard', user);
});

router.get('/zipcode/:zipcode', (req, res) => {
    Entries.findAll({
        where: {
            zipcode: req.params.zipcode
        }
    }).then(dbRes => {
        // res.json(dbRes);
        let user = {
            id: req.session.user
        }
        // dbRes = dbRes.get({ plain: true }) // broken
        const data = dbRes.map(entry => entry.get({ plain: true }));

        res.render('search-results', { data });
        // console.log(dbRes);
    });
});

module.exports = router;