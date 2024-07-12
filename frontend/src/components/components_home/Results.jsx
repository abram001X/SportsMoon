/* eslint-disable react/prop-types */
export function Results({ apiResults,handleActive}) {
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
<section className="cont_teamsresults-padre white scroll-results">
<br /><br />
    {arrayCopa.map((elements, j) => {
            if (elements.fixture.status.long == 'Match Finished'){
                return (
                    <>
                    <article key={j} className="cont_teams_results-child results plate" onClick={()=> handleActive(true,elements.fixture.id)}>
                    <section className="cont_teams-child results">
                    <div className="teams_results-child">
                        <div className="results-p-img">
                        <img src={elements.teams.home.logo} alt="" />
                        <p >{elements.teams.home.name}</p>
                        </div>
                        <b className="b-results-child">{elements.goals.home}</b>
                    </div>
                    <div className="teams_results-child">
                        <div className="results-p-img">
                        <img src={elements.teams.away.logo} alt="" />
                        <p >{elements.teams.away.name}</p>
                        </div>
                        <b className="b-results-child">{elements.goals.away}</b>
                    </div>
                    </section>
                    <div className="fecha_results-child"><p style={{'fontSize': '15px'}}>{elements.fixture.date.slice(5,7)}/{elements.fixture.date.slice(8,10)}</p></div>
                    </article>
            
                    </>
                );
            }
    })}
</section>
</>
)
}
