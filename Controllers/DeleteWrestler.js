const { pool } = require('../Config/db');
const { WrestlerDeleteQueries } = require('../Queries/WrestlerDeleteQueries');

module.exports.DeleteWrestler = (req, res) => {
    const id = parseInt(req.params.id.slice(1));
    pool.query(WrestlerDeleteQueries.deleteWrestler, [id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler with ID: ${id} deleted successfully`);
    })
}