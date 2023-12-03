module.exports.WrestlerPostQueries = {
    addWrestler :
    `INSERT INTO pro_wrestler(
        wrestler_id,
        wrestler_name,
        promotion_id,
        gender,
        allegiance_id,
        style_id,
        finisher_id,
        bio) VALUES(
           $1, $2, $3, $4, $5, $6, $7, $8 
        ) RETURNING *`
}