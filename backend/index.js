// importando independencias y modulos
const express = require('express')
const fs = require('node:fs')
const path = require('node:path')
const cors = require('cors')
// constantes
const app = express()
const port = process.env.PORT || 3000
const leagues = path.join(__dirname, 'json', 'leagues.json')
const news = path.join(__dirname, 'json', 'noticias.json')
// app
app.use(cors())

app.get('/api/news', (req, res) => {
  fs.readFile(news, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
    }
    const apiData = JSON.parse(data)
    res.send(apiData)
  })
})

app.get('/api/leagues', (req, res) => {
  fs.readFile(leagues, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
    }
    const apiData = JSON.parse(data)
    res.send(apiData)
  })
})

/* app.get('/api/calendario/:league/:season', (req, res) => {
  const axios = require('axios')

  const config = {
    method: 'get',
    url: `https://v3.football.api-sports.io/fixtures?league=${req.params.league}&season=${req.params.season}`,
    headers: {
      'x-rapidapi-key': '5aecbdbf507fe9edaaed01e42ae5b531',
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  }
  axios(config)
    .then(function (response) {
      res.json(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
})

app.get('/api/standings/:league/:season', (req, res) => {
  const axios = require('axios')

  const config = {
    method: 'get',
    url: 'https://v3.football.api-sports.io/leagues',
    headers: {
      'x-rapidapi-key': '5aecbdbf507fe9edaaed01e42ae5b531',
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  }

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error)
    })
}) */

console.log('http://localhost:3000/api/league')
app.listen(port)
