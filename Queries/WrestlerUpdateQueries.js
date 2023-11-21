module.exports.WrestlerUpdateQueries = {
    updateWrestlerName :
    `UPDATE
        pro_wrestler
    SET
        wrestler_name = $1 
    WHERE
        wrestler_id = $2`
}