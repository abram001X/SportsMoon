import { createClient } from '@libsql/client'
import dotenv from 'dotenv'

dotenv.config()
const db = createClient({
  url: process.env.DB_URL,
  authToken: process.env.DB_TOKEN
})

const resultLeague = await db.execute('SELECT id,name,logo,flag FROM league WHERE id = 39;')
const resultStandings = await db.execute('SELECT rank_sta as rank, points, goalsDiff, group_sta as group_, form, description FROM standing;')
const resultEquipos = await db.execute('SELECT eq.team_id as id, name, logo FROM standing team INNER JOIN equipos eq ON eq.team_id = team.team_id;')
const resultAlls = await db.execute('SELECT played,win,draw,lose FROM alls;')
const resultGoals = await db.execute('SELECT for_, against FROM goals;')
const all = resultAlls.rows.map((ele, j) => {
  return {
    played: ele.played,
    win: ele.win,
    draw: ele.draw,
    lose: ele.lose,
    goals: resultGoals.rows[j]
  }
})
const objArray = resultStandings.rows.map((obj, j) => {
  return [{
    rank: obj.rank,
    team: resultEquipos.rows[j],
    points: obj.points,
    goalsDiff: obj.goalsDiff,
    group: obj.group_,
    form: obj.form,
    description: obj.description,
    all: all[j]
  }]
})
export const apiStandingDb = {
  response: resultLeague.rows.map((obj, j) => {
    return {
      league: obj,
      standings: objArray
    }
  })
}
