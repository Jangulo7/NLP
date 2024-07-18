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

// Designates what port the app will listen to for incoming requests
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
app.post('/dataAnalyze', (req, res) => {
    const urltext = req.body["formText"]
    const langua = "en"
    const response = fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${API_MC}&url=${urltext}&lang=${langua}`)
    .then(response => response.json())
    .then(response => res.send(response))
    .catch(error => console.log('Error: ', error));
})


