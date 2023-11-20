const { pool } = require('../Config/db');

module.exports.DeleteWrestler = (req, res) => {
    const id = parseInt(req.params.id.slice(1));
    pool.query(`DELETE FROM pro_wrestler WHERE wrestler_id = $1`, [id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler with ID: ${id} deleted successfully`);
    })
}