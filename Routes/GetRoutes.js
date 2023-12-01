// Importing controllers to handle routes
const { GetAllWrestlers, GetWrestlerById, GetWrestlersByName } = require('../Controllers/GetWrestlers');

const router = require('express').Router();

// Routes
router.get('/wrestlers/', GetAllWrestlers);
router.get('/wrestlers/search', GetWrestlersByName);
router.get('/wrestler/:id', GetWrestlerById);

module.exports = router;