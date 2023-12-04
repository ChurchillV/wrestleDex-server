const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv').config();

//Environment variables
const { PORT } = process.env;

// Routes to handle requests
const getWrestlers = require('./Routes/GetRoutes');
const updateWrestlers = require('./Routes/PutRoutes');
const deleteWrestlers = require('./Routes/DeleteRoutes');
const postWrestlers = require('./Routes/PostRoutes');
const getAttributes = require('./Routes/AttributeRoutes');

app.use(cors());
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
app.use('/', deleteWrestlers);
app.use('/', getWrestlers);
app.use('/', updateWrestlers);
app.use('/', postWrestlers);
app.use('/', getAttributes);