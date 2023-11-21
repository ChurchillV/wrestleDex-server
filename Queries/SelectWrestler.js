module.exports.WrestlerProfileQueries = {
    getWrestlerById :
        `SELECT 
            pro_wrestler.wrestler_id,
            pro_wrestler.wrestler_name,
            pro_wrestler.gender,
            pro_wrestler.bio,
            pro_wrestler.finisher_id AS wrestler_finish,
            pro_wrestler.style_id AS wrestler_style,
            pro_wrestler.allegiance_id AS wrestler_allegiance,
            pro_wrestler.promotion_id AS wrestler_promotion,

            finisher.finisher_id,
            finisher.finisher_name,
            finisher.finisher_description,
            finisher.finisher_popularity,

            wrestling_style.style_id,
            wrestling_style.style_name,
            wrestling_style.style_description,
            wrestling_style.style_popularity,

            allegiance.allegiance_id,
            allegiance.allegiance_name,
            allegiance.allegiance_description,

            promotion.promotion_id,
            promotion.promotion_name,
            promotion.promotion_owner 
            
        FROM 
            pro_wrestler
        JOIN 
            finisher ON pro_wrestler.finisher_id = finisher.finisher_id

        JOIN
            wrestling_style ON pro_wrestler.style_id = wrestling_style.style_id

        JOIN 
            allegiance ON pro_wrestler.allegiance_id = allegiance.allegiance_id

        JOIN 
            promotion ON pro_wrestler.promotion_id  = promotion.promotion_id
            
        WHERE
            wrestler_id = $1`
}