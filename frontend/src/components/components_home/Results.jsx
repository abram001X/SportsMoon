/* eslint-disable react/prop-types */
export function Results({ apiResults }) {

    const arrayCopa = apiResults
    arrayCopa.sort((a,b) => a.fixture.date.slice(8,10) - b.fixture.date.slice(8,10))

return (
<>
<section className="cont_teamsresults-padre black" >
<h2  style={{'width': '100%'}}>Results</h2>
<br /><br />
    {arrayCopa.map((elements, j) => {
        
        if (elements.fixture.status.long !== 'Not Started'){
            return (
                <>
                
                <article key={j} className="cont_teams_results-child  results">
                <div className="teams_results-child">
                    <div className="results-p-img">
                    <img src={elements.teams.home.logo} alt="" />
                    <p className={elements.teams.home.winner ? 'points' : ''}>{elements.teams.home.name}</p>
                    </div>
                    <b>{elements.goals.home}</b>
                </div>
                <div className="teams_results-child">
                    <div className="results-p-img">
                    <img src={elements.teams.away.logo} alt="" />
                    <p className={elements.teams.away.winner ? 'points' : ''}>{elements.teams.away.name}</p>
                    </div>
                    <b>{elements.goals.away}</b>
                </div>
                </article>
                <section className="fecha_results-child"><p style={{'fontSize': '15px'}}>{elements.fixture.date.slice(5,10)}</p></section>
        
                </>
            );
        }
    
    })}
    
</section>
</>
)
}
