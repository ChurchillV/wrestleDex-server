const { pool } = require('../Config/db');

module.exports.UpdateWrestlerData = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedWrestlerData = req.body;
    const updateFields = Object.keys(updatedWrestlerData).map((key, index) => {
        return `${key} = $${index + 1}`;
      });
    
    pool.query(`
    UPDATE pro_wrestler
    SET
      ${updateFields.join(', ')}
    WHERE
      wrestler_id = $${Object.keys(updatedWrestlerData).length + 1}
    RETURNING *;
    `,

    [...Object.values(updatedWrestlerData), id], (error, results) => {
        if(error) {
            throw error;
        }
        res.status(200).send(`Wrester ${id} data updated successfully`);
        console.log(`Wrestler ${id} data updated successfully`);
    });
}