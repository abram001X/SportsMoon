/* eslint-disable react/prop-types */
export function TableTeams({ apiStandings }) {
  let apiCopa = [];


  apiStandings.map(standings =>{
    return standings.map(elements =>{
        return elements.map(element => {
          apiCopa.push(element)
        })
    })
  })
apiCopa.sort((a,b)=> b.points - a.points)

  return (
    <>
    <h2  className="h3-style-global"  >Clasificación</h2>
    <article className="cont_teams-padre plate">
      <div className="info_groups-child-teamsgroup table-teams">
                    <div className="p-child-table-groups">
                      <p>EQUIPOS</p>
                    </div>
                    <ul className="ul-child-table-groups">
                      <li>PJ</li>
                      <li>G</li>
                      <li>E</li>
                      <li>P</li>
                      <li>GF</li>
                      <li>GC</li>
                      <li>DG</li>
                      <li>PTS</li>
                    </ul>
      </div>
      {apiCopa.map((element,j)=>{
        return (
          <div className="standings-child-cont-groups table-teams" key={j}>
          <div className="table-groups">
            <div className="p-child-table-groups">
              <img src={element.team.logo} alt="" />
              <p className="p-groupsteams">
                {element.team.name}
              </p>
            </div>
            <ul className="ul-child-table-groups">
              <li>{element.all.played}</li>
              <li>{element.all.win}</li>
              <li>{element.all.draw}</li>
              <li>{element.all.lose}</li>
              <li>{element.goalsDiff}</li>
              <li>{element.all.goals.for}</li>
              <li>{element.all.goals.against}</li>
              <li>{element.points}</li>
            </ul>
          </div>
        </div>
      );
      })}
    </article>
    </>
  );
}
