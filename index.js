const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

//Environment variables
const { PORT } = process.env;

// Routes to handle requests
const responseRoute = require('./Routes/GetRoutes');

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended : true,
    })
)

app.listen(PORT, () => {
    console.log(`WrestleDex server is live on port ${ PORT }`)
});

app.use('/', responseRoute);

