const { pool } = require('../Config/db');
const { WrestlerProfileQueries } = require('../Queries/SelectWrestler');

module.exports.GetAllWrestlers = (req, res) => {
    pool.query(`SELECT * FROM pro_wrestler ORDER BY wrestler_id`, (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
        console.log(`Wrestlers returned successfully`);
    });
};

module.exports.GetWrestlerById = (req, res) => {
    const id = parseInt(req.params.id.slice(1));

    pool.query(WrestlerProfileQueries.getWrestlerById, [id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
        console.log(`Wrestler ${id} returned successfully`);
    })
}

