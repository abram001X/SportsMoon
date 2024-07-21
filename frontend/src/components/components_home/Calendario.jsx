import {  useState } from "react"

/* eslint-disable react/prop-types */
export function Calendario({ apiResults,handleActive }) {
    const [dateToday, setDateToday] = useState('2024-11-07')
    let today = new Date(dateToday)
    today = today +""
    today = today.slice(0,15)
    console.log(today)

    const ordenDate = (a,b)=>{
        let dateA = new Date(a.fixture.date)
        let dateB = new Date(b.fixture.date)
        return dateB.getTime() - dateA.getTime()
    }
    apiResults.sort(ordenDate)

const arrayCopa = apiResults
console.log(apiResults)

return (
    <>
    <h2 className='h3-style-global' id='calendario'>Calendario</h2>
    <input className="calendario-child" type="date"  min="1924-01-01" max="2025-01-01" onChange={(e)=>{setDateToday(e.target.value)}}/>
    <section className="cont_teamsresults-padre white">
    {arrayCopa.map((elements, j) => {
        let fecha = new Date(elements.fixture.date)
        fecha = fecha +""
        fecha = fecha.slice(0,15)
        if(fecha == today){
            console.log(fecha)
            return (
                <article key={j} className="cont_teams_results-child  plate"  onClick={()=> handleActive(true,elements.fixture.id,elements.goals.home,elements.goals.away)}>
                <section className="cont_teams-child results">
                    <div className="teams_results-child">
                    <div className="results-p-img">
                        <img src={elements.teams.home.logo} alt="" />
                        <p>{elements.teams.home.name}</p>
                        <b>{elements.goals.home}</b>
                    </div>
                    </div>
                    <div className="teams_results-child">
                    <div className="results-p-img">
                        <img src={elements.teams.away.logo} alt="" />
                        <p>{elements.teams.away.name}</p>
                        <b>{elements.goals.away}</b>
                    </div>
                    </div>
                </section>
                <div className="fecha_results-child">
                    <p style={{ fontSize: '15px' }}>
                    {fecha.slice(0, 8)}
                    {fecha.slice(11)}
                    </p>
                </div>
                </article>
            )
        }
    })}
    </section>
    
    </>
);
}
