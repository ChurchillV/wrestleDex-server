const { GetAllFinishers } = require('../Controllers/Atrributes/GetFinishers');
const { GetAllPromotions } = require('../Controllers/Atrributes/GetPromotions');
const { GetAllStyles } = require('../Controllers/Atrributes/GetStyles');

const router = require('express').Router();

router.get('/finishers/', GetAllFinishers);
router.get('/promotions/', GetAllPromotions);
router.get('/styles/', GetAllStyles);

module.exports = router;