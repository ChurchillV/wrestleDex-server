// Importing controllers to handle routes
const { UpdateWrestlerData } = require('../Controllers/UpdateWrestler');

const router = require('express').Router();

router.put('/wrestler/:id', UpdateWrestlerData);

module.exports = router;