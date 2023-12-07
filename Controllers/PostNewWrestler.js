const { pool } = require('../Config/db');
const { WrestlerPostQueries } = require('../Queries/Wrestlers/WrestlerPostQueries');

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
        img,
    } = req.body;

    pool.query(WrestlerPostQueries.addWrestler,
                 [id,
                 name,
                 promotion_id,
                 gender,
                 allegiance,
                 style,
                 finisher_id,
                 bio,
                 img], (error, results) => {
                    if(error) {
                        throw error;
                    }
                    res.status(201).send(`Wrestler ${name} uploaded successfully`);
                    console.log(`Wrestler ${name} uploaded successfully`);
                 })
}