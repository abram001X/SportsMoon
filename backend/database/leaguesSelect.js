import { createClient } from '@libsql/client'
import dotenv from 'dotenv'

dotenv.config()
const db = createClient({
  url: process.env.DB_URL,
  authToken: process.env.DB_TOKEN
})
const resultLeague = await db.execute('SELECT id,name,type,logo FROM league;')
const resultCountry = await db.execute('SELECT name, code, flag FROM country ORDER BY id ASC;')
const resultSeasons = await db.execute('SELECT seasons FROM season ORDER BY id ASC;')
const arraySea = resultSeasons.rows.map((obj, j) => {
  return obj.seasons.split(',').map((ele) => {
    return { year: ele }
  })
})
export const apiDb = {
  response: resultLeague.rows.map((obj, j) => {
    return {
      league: obj,
      country: resultCountry.rows[j],
      seasons: arraySea[j]
    }
  })
}
export const searchFunction = async (text) => {
  return await db.execute(`SELECT id,name,type,logo FROM league WHERE name LIKE "${text}%";`)
}
// rutas
