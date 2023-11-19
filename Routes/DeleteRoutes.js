// Importing controllers to handle routes
const { DeleteWrestler } = require('../Controllers/DeleteWrestler');

const router = require('express').Router();

router.delete('/wrestlers/:id', DeleteWrestler);

module.exports = router;