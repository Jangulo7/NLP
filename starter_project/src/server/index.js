var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require(node-fetch)
const dotenv = require('dotenv')
const cors = require('cors')
const { Console } = require('console')

dotenv.config()

// Variables for url and api key
const API_MC = process.env.API_MC 

// Start an instance of app
const app = express()

// Configurating Express to use Body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(cors())

// Initialization of main project folder
app.use(express.static('dist'))

// Server setup
const port = process.env.port || 8081
app.listen((port), () => {
    console.log("Server running")
    console.log('running on localhost:${port}')
})

// Routes
//GET Route
app.get('/', function (req, res){
    res.sendFile("dist/index.html")
})

// POST Route




// Designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})


