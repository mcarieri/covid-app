const router = require('express').Router();

const userRoutes = require('./users-routes.js');
const entriesRoutes = require('./entries-routes');

router.use('/users', userRoutes);
router.use('/entries', entriesRoutes);

module.exports = router;