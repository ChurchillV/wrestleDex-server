const { pool } = require('../../Config/db')
const { FinisherQueries } = require('../../Queries/Finishers/getFinishers');

module.exports.GetAllFinishers = (req, res) => {
    pool.query(FinisherQueries.getFinishers, (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200)
           .json(results.rows)
        console.log(`All Finisher details returned successfully`);
    })
}