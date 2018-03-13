const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , PORT = 8080;

const app = express();

app.use(bodyParser.json());

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}.`); });