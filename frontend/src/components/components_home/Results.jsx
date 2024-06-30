/* eslint-disable react/prop-types */
export function Results({ apiResults, resultCalendario }) {
    if (resultCalendario){
        const ordenDate = (a,b)=>{
            let dateA = new Date(a.fixture.date.slice(0,10))
            let dateB = new Date(b.fixture.date.slice(0,10))
            return dateB.getTime() - dateA.getTime()
        }
        apiResults.sort(ordenDate)
    }
    else{
        const ordenDate = (a,b)=>{
            let dateA = new Date(a.fixture.date.slice(0,10))
            let dateB = new Date(b.fixture.date.slice(0,10))
            return dateA.getTime() - dateB.getTime()
        }
        apiResults.sort(ordenDate)
    }
    const arrayCopa = apiResults
    
return (
<>
<section className="cont_teamsresults-padre">
{resultCalendario ? <h2  style={{'width': '100%'}}>Results</h2> : <h2  style={{'width': '100%'}}>Calendario</h2>}
<br /><br />
    {arrayCopa.map((elements, j) => {
        let fecha = new Date(elements.fixture.date)
        fecha = fecha + ""
        if (resultCalendario){
            if (elements.fixture.status.long !== 'Not Started'){
                return (
                    <>
                    <article key={j} className="cont_teams_results-child  results">
                    <div className="teams_results-child">
                        <div className="results-p-img">
                        <img src={elements.teams.home.logo} alt="" />
                        <p >{elements.teams.home.name}</p>
                        </div>
                        <b className={elements.teams.home.winner ? 'points' : ''}>{elements.goals.home}</b>
                    </div>
                    <div className="teams_results-child">
                        <div className="results-p-img">
                        <img src={elements.teams.away.logo} alt="" />
                        <p >{elements.teams.away.name}</p>
                        </div>
                        <b className={elements.teams.away.winner ? 'points' : ''}>{elements.goals.away}</b>
                    </div>
                    </article>
                    <section className="fecha_results-child"><p style={{'fontSize': '15px'}}>{elements.fixture.date.slice(5,7)}/{elements.fixture.date.slice(8,10)}</p></section>
            
                    </>
                );
            }
        }else {
            if (elements.fixture.status.long === 'Not Started'){
                return (
                    <>
                    <article key={j} className="cont_teams_results-child  results">
                    <div className="teams_results-child">
                        <div className="results-p-img">
                        <img src={elements.teams.home.logo} alt="" />
                        <p >{elements.teams.home.name}</p>
                        </div>
                        <b className={elements.teams.home.winner ? 'points' : ''}>{elements.goals.home}</b>
                    </div>
                    <div className="teams_results-child">
                        <div className="results-p-img">
                        <img src={elements.teams.away.logo} alt="" />
                        <p >{elements.teams.away.name}</p>
                        </div>
                        <b className={elements.teams.away.winner ? 'points' : ''}>{elements.goals.away}</b>
                    </div>
                    </article>
                    <section className="fecha_results-child"><p style={{'fontSize': '15px'}}>{fecha.slice(0,8)}{fecha.slice(15,fecha.indexOf(':00 G'))}</p></section>
            
                    </>
                );
            }
        }
        
    
    })}
    
</section>
</>
)
}
