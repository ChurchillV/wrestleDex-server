const { pool } = require('../../Config/db');
const { StyleQueries } = require('../../Queries/Styles/GetStyles');

module.exports.GetAllStyles = (req, res) => {
    pool.query(StyleQueries.getStyles, (error, results)=> {
        if(error) {
            throw error;
        }
        res.status(200)
           .json(results.rows)
        console.log(`All Style details returned successfully`);
    })
}