const {PORT} = process.env;

module.exports.DisplayResponse = (req, res) => {
    res.send(`App is running`);
}

