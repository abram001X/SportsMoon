// importando independencias y modulos
import express from 'express'
import cors from 'cors'
import { FRONTEND_URL, PORT } from './config.js'
import { apiDb } from './database/leaguesSelect.js'
import { createClient } from '@libsql/client'
import dotenv from 'dotenv'

dotenv.config()
const db = createClient({
  url: process.env.DB_URL,
  authToken: process.env.DB_TOKEN
})
// constantes
const app = express()

// app
app.use(express.json())
app.use(
  cors({
    origin: FRONTEND_URL
  })
)

// noticias
app.get('/api/news', (req, res) => {
  fetch('https://newsdata.io/api/1/latest?country=ve&category=sports&apikey=pub_4787349d17bdef1a8a8f2e332f0dd038c6ce0')
    .then(response => response.json())
    .then(data => res.json(data))
})

// Leagues
app.get('/api/leagues', (req, res) => {
  res.send(apiDb)
})

app.get('/search/leagues/:league', async (req, res) => {
  const result = await db.execute(`SELECT id,name,type,logo FROM league WHERE name LIKE "${req.params.league}%";`)
  res.send(result.rows)
})

console.log('http://localhost:3000/api/leagues')
app.listen(PORT)
