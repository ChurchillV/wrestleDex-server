// Importing controllers to handle routes
const { PostNewWrestler } = require('../Controllers/PostNewWrestler');

const router = require('express').Router();

// Routes
router.post('/wrestler/', PostNewWrestler);

module.exports = router;