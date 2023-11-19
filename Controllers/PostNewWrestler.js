const { pool } = require('../Config/db');

module.exports.PostNewWrestler = (req, res) => {
    const {
        id,
        name,
        promotion_id,
        gender,
        allegiance,
        style,
        finisher_id,
        bio,
    } = req.body;

    pool.query(`INSERT INTO pro_wrestlers(
                 wrestler_id,
                 wrestler_name,
                 promotion_id,
                 gender,
                 allegiance_id,
                 style_id,
                 finisher_id,
                 bio) RETURNING *`,
                 [id,
                 name,
                 promotion_id,
                 gender,
                 allegiance,
                 style,
                 finisher_id,
                 bio], (error, results) => {
                    if(error) {
                        throw error;
                    }
                    res.status(201).send(`Wrestler ${name} uploaded successfully`)
                       .json(results.rows);
                 } )
}