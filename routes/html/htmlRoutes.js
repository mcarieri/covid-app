let router = require('express').Router();
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/index', function(req, res) {
    res.render('index');
});

router.get('/search', function(req, res) {
    res.render('search');
});

router.get('/signup', function(req, res) {
    res.render('signup');
});

router.get('/login', function(req, res) {
    res.render('login');
});

module.exports = router;