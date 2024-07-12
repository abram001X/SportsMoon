import {  useState } from "react"

/* eslint-disable react/prop-types */
export function Calendario({ apiResults,season,handleActive }) {
    const [dateToday, setDateToday] = useState('2024-11-07')
    let today = new Date(dateToday)
    today = today +""
    today = today.slice(0,15)
    console.log(today)

    const ordenDate = (a,b)=>{
        let dateA = new Date(a.fixture.date.slice(0,10))
        let dateB = new Date(b.fixture.date.slice(0,10))
        return dateA.getTime() - dateB.getTime()
    }
    apiResults.sort(ordenDate)

const arrayCopa = apiResults
console.log(apiResults)

return (
    <>
    <section className="cont_teamsresults-padre white">
        <input className="calendario-child" type="date"  min="1924-01-01" max="2025-01-01" onChange={(e)=>{setDateToday(e.target.value)}}/>
        
    {arrayCopa.map((elements, j) => {
        let fecha = new Date(elements.fixture.date)
        fecha = fecha +""
        fecha = fecha.slice(0,15)
        if(fecha == today){
            console.log(fecha)
            return (
                <article key={j} className="cont_teams_results-child  plate"  onClick={()=> handleActive(true,elements.fixture.id)}>
                <section className="cont_teams-child results">
                    <div className="teams_results-child">
                    <div className="results-p-img">
                        <img src={elements.teams.home.logo} alt="" />
                        <p>{elements.teams.home.name}</p>
                    </div>
                    </div>
                    <div className="teams_results-child">
                    <div className="results-p-img">
                        <img src={elements.teams.away.logo} alt="" />
                        <p>{elements.teams.away.name}</p>
                    </div>
                    </div>
                </section>
                <div className="fecha_results-child">
                    <p style={{ fontSize: '15px' }}>
                    {fecha.slice(0, 8)}
                    {fecha.slice(11, fecha.indexOf(':00 G'))}
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
