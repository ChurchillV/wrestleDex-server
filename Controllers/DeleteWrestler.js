const { pool } = require('../Config/db');

module.exports.DeleteWrestler = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(`DELETE FROM pro_wrestlers WHERE id = $1`, [id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler with ID: ${id} deleted successfully`);
    })
}