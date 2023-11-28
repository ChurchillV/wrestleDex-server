// Importing controllers to handle routes
const { 
    UpdateWrestlerName,
    UpdateWrestlerPromotion,
    UpdateWrestlerAllegiance,
    UpdateWrestlerStyle,
    UpdateWrestlerFinisher,
    UpdateWrestlerBio,
    UpdateWrestlerImg,
    } = require('../Controllers/UpdateWrestler');

const router = require('express').Router();

router.put('/wrestler/name/:id', UpdateWrestlerName);
router.put('/wrestler/promotion/:id', UpdateWrestlerPromotion);
router.put('/wrestler/allegiance/:id', UpdateWrestlerAllegiance);
router.put('/wrestler/style/:id', UpdateWrestlerStyle);
router.put('/wrestler/finisher/:id', UpdateWrestlerFinisher);
router.put('/wrestler/bio/:id', UpdateWrestlerBio);
router.put('/wrestler/img/:id', UpdateWrestlerImg);

module.exports = router;