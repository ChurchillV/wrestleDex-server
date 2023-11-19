// Importing controllers to handle routes
const { GetAllWrestlers } = require('../Controllers/GetAllWrestlers');
const { GetWrestlerById } = require('../Controllers/GetWrestlerById'); 

const router = require('express').Router();

router.get('/wrestlers/', GetAllWrestlers);
router.get('/wrestler/:id', GetWrestlerById);

module.exports = router;