const { pool } = require('../../Config/db')
const { PromotionQueries } = require('../../Queries/Promotions/GetPromotions');

module.exports.GetAllPromotions = (req, res) => {
    pool.query(PromotionQueries.getPromotions, (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200)
           .json(results.rows)
        console.log(`All Promotion details returned successfully`);
    })
}