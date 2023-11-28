const { pool } = require('../Config/db');
const { WrestlerUpdateQueries } = require('../Queries/WrestlerUpdateQueries');

module.exports.UpdateWrestlerName = (req, res) => {
    const id = parseInt(req.params.id.slice(1));
    const { name } = req.body;

    pool.query(WrestlerUpdateQueries.updateWrestlerName, [name, id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler ${id} name updated successfully`);
        console.log(`Wrestler ${id} name updated successfully`);
    });
}

module.exports.UpdateWrestlerPromotion = (req, res) => {
    const id = parseInt(req.params.id.slice(1));
    const { promotion } = req.body;

    pool.query(WrestlerUpdateQueries.updateWrestlerPromotion, [promotion, id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler ${id} promotion updated successfully`);
        console.log(`Wrestler ${id} promotion updated successfully`);
    });
}

module.exports.UpdateWrestlerAllegiance = (req, res) => {
    const id = parseInt(req.params.id.slice(1));
    const { allegiance } = req.body;

    pool.query(WrestlerUpdateQueries.updateWrestlerAllegiance, [allegiance, id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler ${id} allegiance updated successfully`);
        console.log(`Wrestler ${id} allegiance updated successfully`);
    });
}

module.exports.UpdateWrestlerStyle = (req, res) => {
    const id = parseInt(req.params.id.slice(1));
    const { style } = req.body;

    pool.query(WrestlerUpdateQueries.updateWrestlerStyle, [style, id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler ${id} style updated successfully`);
        console.log(`Wrestler ${id} style updated successfully`);
    });
}

module.exports.UpdateWrestlerFinisher = (req, res) => {
    const id = parseInt(req.params.id.slice(1));
    const { finisher } = req.body;

    pool.query(WrestlerUpdateQueries.updateWrestlerFinisher, [finisher, id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler ${id} finisher updated successfully`);
        console.log(`Wrestler ${id} finisher updated successfully`);
    });
}

module.exports.UpdateWrestlerBio = (req, res) => {
    const id = parseInt(req.params.id.slice(1));
    const { bio } = req.body;

    pool.query(WrestlerUpdateQueries.updateWrestlerBio, [bio, id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler ${id} bio updated successfully`);
        console.log(`Wrestler ${id} bio updated successfully`);
    });
}

module.exports.UpdateWrestlerImg = (req, res) => {
    const id = parseInt(req.params.id.slice(1));
    const { image_url } = req.body;

    pool.query(WrestlerUpdateQueries.updateWrestlerImg, [image_url, id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrestler ${id} image_url updated successfully`);
        console.log(`Wrestler ${id} image_url updated successfully`);
    });
}