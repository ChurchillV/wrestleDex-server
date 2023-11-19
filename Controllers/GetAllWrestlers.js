const { pool } = require('../Config/db');

module.exports.GetAllWrestlers = (req, res) => {
    pool.query(`SELECT * FROM pro_wrestler ORDER BY wrestler_id`, (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

module.exports.GetWrestlerById = (req, res) => {
    const id = parseInt(request.params.id);

    pool.query(`SELECT * FROM pro_wrestlers WHERE id = $1`, [id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
    })
}

