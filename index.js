const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

//Environment variables
const { PORT } = process.env;

// Routes to handle requests
const getAllWrestlers = require('./Routes/GetRoutes');
const updateWrestlers = require('./Routes/PutRoutes');
const deleteWrestlers = require('./Routes/DeleteRoutes');

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended : true,
    })
)

app.listen(PORT, () => {
    console.log(`WrestleDex server is live on port ${ PORT }`)
});

// Express request handlers
app.use('/', getAllWrestlers);
app.use('/', updateWrestlers);
app.use('/', deleteWrestlers);