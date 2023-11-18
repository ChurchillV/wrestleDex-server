const { DisplayResponse } = require('../Controllers/GetControllers');
const router = require('express').Router();

router.get('/', DisplayResponse);

module.exports = router;