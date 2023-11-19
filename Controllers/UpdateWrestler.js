const { pool } = require('../Config/db');

module.exports.UpdateWrestlerName = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(`UPDATE pro_wrestlers SET wrestler_name = $1 WHERE wrestler_id = $2`, [name, id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler ${id} name updated successfully`);
    });
}

module.exports.UpdateWrestlerPromotion = (req, res) => {
    const id = parseInt(req.params.id);
    const { promotion } = req.body;

    pool.query(`UPDATE pro_wrestlers SET promotion_id = $1 WHERE wrestler_id = $2`, [promotion, id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler ${id} promotion updated successfully`);
    });
}

module.exports.UpdateWrestlerAllegiance = (req, res) => {
    const id = parseInt(req.params.id);
    const { allegiance } = req.body;

    pool.query(`UPDATE pro_wrestlers SET allegiance_id = $1 WHERE wrestler_id = $2`, [allegiance, id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler ${id} allegiance updated successfully`);
    });
}

module.exports.UpdateWrestlerStyle = (req, res) => {
    const id = parseInt(req.params.id);
    const { style } = req.body;

    pool.query(`UPDATE pro_wrestlers SET style_id = $1 WHERE wrestler_id = $2`, [style, id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler ${id} style updated successfully`);
    });
}

module.exports.UpdateWrestlerFinisher = (req, res) => {
    const id = parseInt(req.params.id);
    const { finisher } = req.body;

    pool.query(`UPDATE pro_wrestlers SET finisher_id = $1 WHERE wrestler_id = $2`, [finisher, id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler ${id} finisher updated successfully`);
    });
}

module.exports.UpdateWrestlerBio = (req, res) => {
    const id = parseInt(req.params.id);
    const { bio } = req.body;

    pool.query(`UPDATE pro_wrestlers SET bio = $1 WHERE wrestler_id = $2`, [bio, id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler ${id} bio updated successfully`);
    });
}