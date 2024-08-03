// importando independencias y modulos
import express from 'express'
import cors from 'cors'
import axios from 'axios'
import { FRONTEND_URL, PORT } from './config.js'
// constantes
const app = express()

// app
app.use(
  cors({
    origin: FRONTEND_URL
  })
)

app.get('/api/news', (req, res) => {
  fetch('https://newsdata.io/api/1/latest?country=ve&category=sports&apikey=pub_4787349d17bdef1a8a8f2e332f0dd038c6ce0')
    .then(response => response.json())
    .then(data => res.json(data))
})

app.get('/api/leagues', (req, res) => {
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
      res.json(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
})

app.get('/api/calendario/:league/:season', (req, res) => {
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
  const config = {
    method: 'get',
    url: `https://v3.football.api-sports.io/standings?league=${req.params.league}&season=${req.params.season}`,
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

app.get('/api/estadistica/:fixture', (req, res) => {
  const config = {
    method: 'get',
    url: `https://v3.football.api-sports.io/fixtures/statistics?fixture=${req.params.fixture}`,
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
console.log('http://localhost:3000/api/league')
app.listen(PORT)
