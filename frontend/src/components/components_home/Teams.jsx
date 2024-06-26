/* eslint-disable react/prop-types */
export function Teams({ apiTeamsCopa }) {
  return (
    <article className="cont_teams-padre black">
        <h2>Equipos</h2>
      <div className="info_groups-child-teamsgroup table-teams">
                    <div className="p-child-table-groups">
                      <p>EQUIPOS</p>
                    </div>
                    <div className="b-child-table-groups">
                      <b>PJ</b>
                      <b>G</b>
                      <b>E</b>
                      <b>P</b>
                      <b>GF</b>
                      <b>GC</b>
                      <b>DG</b>
                      <b>PTS</b>
                    </div>
                  </div>
      {apiTeamsCopa.map((standings) => {
        return standings.map((elements) => {
          return elements.map((element, j) => {
            return (
                <div className="standings-child-cont-groups table-teams" key={j}>
                <div className="table-groups">
                  <div className="p-child-table-groups">
                    <img src={element.team.logo} alt="" />
                    <p className="p-groupsteams">
                      {element.team.name}
                    </p>
                  </div>
                  <div className="b-child-table-groups">
                    <b>{element.points}</b>
                    <b>{element.all.played}</b>
                    <b>{element.all.win}</b>
                    <b>{element.all.draw}</b>
                    <b>{element.all.lose}</b>
                    <b>{element.all.goals.for}</b>
                    <b>{element.all.goals.against}</b>
                    <b>{element.goalsDiff}</b>
                  </div>
                </div>
              </div>
            );
          });
        });
      })}
    </article>
  );
}
