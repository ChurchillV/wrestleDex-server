module.exports.WrestlerUpdateQueries = {
    updateWrestlerName :
    `UPDATE
        pro_wrestler
    SET
        wrestler_name = $1 
    WHERE
        wrestler_id = $2`,


    updateWrestlerPromotion :
    `UPDATE
        pro_wrestler
    SET
        promotion_id = $1 
    WHERE
        wrestler_id = $2`,


    updateWrestlerAllegiance :
    `UPDATE
         pro_wrestler
    SET
        allegiance_id = $1 
    WHERE
        wrestler_id = $2`,


    updateWrestlerStyle :
    `UPDATE
        pro_wrestler
    SET
        style_id = $1 
    WHERE
        wrestler_id = $2`,


    updateWrestlerFinisher :
    `UPDATE
         pro_wrestler 
    SET
         finisher_id = $1 
    WHERE
         wrestler_id = $2`,

         
    updateWrestlerBio :
    `UPDATE
        pro_wrestler 
    SET
        bio = $1 
    WHERE 
        wrestler_id = $2`,

    updateWrestlerImg :
    `UPDATE
        pro_wrestler 
    SET
        image_url = $1 
    WHERE 
        wrestler_id = $2`,

    updateWrestlerData :
    `UPDATE
        pro_wrestler
    SET
        $1
    WHERE 
        wrestler_id = $2
    RETURNING
        *`,
}