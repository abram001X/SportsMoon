// importando independencias y modulos
const express = require('express')
const fs = require('node:fs')
const path = require('node:path')
const cors = require('cors')
// constantes
const app = express()
const port = process.env.PORT || 3000
const rutaJsonLeague = path.join(__dirname, 'json', 'league.json')
const rutaJsonCopaAmerica = path.join(__dirname, 'json', 'copaAmerica.json')
const rutaJsonEuroCopa = path.join(__dirname, 'json', 'euroCopa.json')
const rutaJsonCalendarioEuro = path.join(__dirname, 'json', 'calendarioEuroCopa.json')
const rutaJsonCalendarioCopaAmerica = path.join(__dirname, 'json', 'calendarioCopaAmerica.json')
// app
app.use(cors())

app.get('/api/league', (req, res) => {
  fs.readFile(rutaJsonLeague, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('Error al leer el json')
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

app.get('/api/copaAmerica', (req, res) => {
  fs.readFile(rutaJsonCopaAmerica, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('Error al leer el json')
    }
    const apiData = JSON.parse(data)
    res.send(apiData)
  })
})

app.get('/api/eurocopa', (req, res) => {
  fs.readFile(rutaJsonEuroCopa, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('Error al leer el json')
    }
    const apiData = JSON.parse(data)
    res.send(apiData)
  })
})

console.log('http://localhost:3000/api/league')
app.listen(port)
