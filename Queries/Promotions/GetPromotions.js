module.exports.PromotionQueries = {
    getPromotions :
    `SELECT 
        abbreviation AS promotion,
        promotion_id 
    FROM 
        promotion`,
}