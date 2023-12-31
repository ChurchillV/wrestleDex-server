const { pool } = require('../Config/db');
const { WrestlerProfileQueries } = require('../Queries/Wrestlers/WrestleProfileQueries');

module.exports.GetAllWrestlers = (req, res) => {
    pool.query(WrestlerProfileQueries.getAllWrestlers, (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200)
           .json(results.rows);
        console.log(`Wrestlers returned successfully`);
    });
};

module.exports.GetWrestlerById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(WrestlerProfileQueries.getWrestlerById, [id], (error, results) => {
        if(error) {
            throw error;
        }

        if(results.rows.length == 0) {
            res.status(404)
               .json({message : `No wrestler with id ${id} found`});
            console.log(`Search for wrestler with id ${id} failed`);
        } else {
            res.status(200)
               .json(results.rows);
            console.log(`Wrestler ${id} returned successfully`);            
        }
    })
}

module.exports.GetWrestlersByName = (req, res) => {
    const name = req.query.name;

    pool.query(WrestlerProfileQueries.getWrestlersByName, [`%${name}%`], (error, results) => {
        if(error) {
            throw error;
        }

        if(results.rows.length == 0) {
            res.status(404)
               .json({message : `No wrestler ${name} found`});
            console.log(`No wrestler with ${name} found`);
        } else {
            res.status(200)
               .json(results.rows);
               console.log(`${results.rows.length} Wrestlers found.`);
        }
    })
}