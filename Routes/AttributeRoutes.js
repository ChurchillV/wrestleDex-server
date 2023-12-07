const { GetAllFinishers } = require('../Controllers/Atrributes/GetFinishers');
const { GetAllPromotions } = require('../Controllers/Atrributes/GetPromotions');
const { GetAllStyles } = require('../Controllers/Atrributes/GetStyles');
const { GetWrestlerCount } = require('../Controllers/Atrributes/GetWrestlerCount');

const router = require('express').Router();

router.get('/finishers/', GetAllFinishers);
router.get('/promotions/', GetAllPromotions);
router.get('/styles/', GetAllStyles);
router.get('/count/', GetWrestlerCount);

module.exports = router;