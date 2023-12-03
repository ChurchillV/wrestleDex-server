module.exports.PromotionQueries = {
    getPromotions :
    `SELECT 
        promotion.abbreviation AS promotion,
        promotion.promotion_id 
    FROM 
        promotion`,
}