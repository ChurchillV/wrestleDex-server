module.exports.WrestlerDeleteQueries = {
    deleteWrestler : 
    `DELETE FROM
        pro_wrestler
    WHERE
        wrestler_id = $1`,
}