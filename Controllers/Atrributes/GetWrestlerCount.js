const { pool } = require('../../Config/db');
const { WrestlerProfileQueries } = require('../../Queries/Wrestlers/WrestleProfileQueries');

module.exports.GetWrestlerCount = (req, res) => {
    pool.query(WrestlerProfileQueries.getWrestlerCount, (error, results) => {
        if(error) { 
            throw error;
        }
        
        res.status(200)
           .json(results.rows);
        console.log(`Wrestler count returned successfully`);
    })
}