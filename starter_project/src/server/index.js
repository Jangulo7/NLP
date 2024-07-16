var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require(node-fetch)
const dotenv = require('dotenv')
const express = express()
const cors = require('cors')
const { Console } = require('console')

dotenv.config()

// Start an instance of app
const app = express()

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

// Variables for url and api key


app.get('/', function (req, res) {
    res.send("This is the server API page, you may access its services via the client app.");
});


// POST Route



// Designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})


