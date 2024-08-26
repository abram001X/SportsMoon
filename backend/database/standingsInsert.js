import { createClient } from '@libsql/client'
import dotenv from 'dotenv'

dotenv.config()
const db = createClient({
  url: process.env.DB_URL,
  authToken: process.env.DB_TOKEN
})

export const addLeagueDb = (res) => {
  const teamTable = async () => {
    const teams = {
      response: res.response.flatMap((obj) => {
        return obj.league.standings.flatMap(arr => arr.map((ele) => {
          return {
            team: ele.team.id,
            name: ele.team.name,
            logo: ele.team.logo
          }
        }))
      })
    }
    const sql = 'INSERT INTO equipos(team_id, name, logo) VALUES(?,?,?)'
    const values = teams.response.map((obj) => {
      return {
        sql,
        args: [obj.team, obj.name, obj.logo]
      }
    })
    await db.batch(values, 'write')
    await leagueTable()
  }
  teamTable()
  // console.log(res.response)
  const leagueTable = async () => {
    const league = {
      response: res.response.flatMap((obj) => {
        return obj.league.standings.flatMap(arr => arr.map((ele) => {
          return {
            temporada: obj.league.season,
            team: ele.team.id,
            rank: ele.rank,
            points: ele.points,
            goalsDiff: ele.goalsDiff,
            group_sta: ele.group,
            form: ele.form,
            description: ele.description
          }
        }))
      })
    }
    const sql = 'INSERT INTO standing(temporada, team_id, rank_sta, points, goalsDiff, group_sta, form, description) VALUES(?,?,?,?,?,?,?,?);'
    const values = league.response.map((obj) => {
      return {
        sql,
        args: [obj.temporada, obj.team, obj.rank, obj.points, obj.goalsDiff, obj.group_sta, obj.form, obj.description]
      }
    })
    await db.batch(values, 'write')
    await allsTable()
  }

  const allsTable = async () => {
    const alls = {
      response: res.response.flatMap((obj) => {
        return obj.league.standings.flatMap(arr => arr.map((ele) => {
          return {
            played: ele.all.played,
            win: ele.all.win,
            draw: ele.all.draw,
            lose: ele.all.lose
          }
        }))
      })
    }
    const sql = 'INSERT INTO alls(standing_id, played, win ,draw,lose) VALUES(?,?,?,?,?);'
    const values = alls.response.map((obj, j) => {
      return {
        sql,
        args: [j + 1, obj.played, obj.win, obj.draw, obj.lose]
      }
    })
    await db.batch(values, 'write')
    await goalsTable()
  }

  const goalsTable = async () => {
    const goals = {
      response: res.response.flatMap((obj) => {
        return obj.league.standings.flatMap(arr => arr.map((ele) => {
          return {
            for: ele.all.goals.for,
            against: ele.all.goals.against
          }
        }))
      })
    }
    const sql = 'INSERT INTO goals(alls_id, for_, against) VALUES(?,?,?);'
    const values = goals.response.map((obj, j) => {
      return {
        sql,
        args: [j + 1, obj.for, obj.against]
      }
    })
    await db.batch(values, 'write')
  }
}
