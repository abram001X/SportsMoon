// importando independencias y modulos
const express = require('express')
const fs = require('node:fs')
const path = require('node:path')
const cors = require('cors')

// constantes
const app = express()
const port = process.env.PORT || 3000
const rutaJsonCalendarioEuro = path.join(
  __dirname,
  'json',
  'calendarioEuroCopa.json'
)
const rutaJsonCalendarioCopaAmerica = path.join(
  __dirname,
  'json',
  'calendarioCopaAmerica.json'
)
const rutaJsonStandingsEuroCopa = path.join(
  __dirname,
  'json',
  'standingsEuroCopa.json'
)
const rutaJsonStandingsCopaAmerica = path.join(
  __dirname,
  'json',
  'standingsCopaAmerica.json'
)

// app
app.use(cors())

app.get('/api/standings/copaamerica', (req, res) => {
  fs.readFile(rutaJsonStandingsCopaAmerica, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
    }
    const apiData = JSON.parse(data)
    res.send(apiData)
  })
})

app.get('/api/standings/eurocopa', (req, res) => {
  fs.readFile(rutaJsonStandingsEuroCopa, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
    }
    const apiData = JSON.parse(data)
    res.send(apiData)
  })
})

app.get('/api/calendario/eurocopa', (req, res) => {
  fs.readFile(rutaJsonCalendarioEuro, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
    }
    const apiData = JSON.parse(data)
    res.send(apiData)
  })
})

app.get('/api/calendario/copaamerica', (req, res) => {
  fs.readFile(rutaJsonCalendarioCopaAmerica, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
    }
    const apiData = JSON.parse(data)
    res.send(apiData)
  })
})

console.log('http://localhost:3000/api/league')
app.listen(port)
