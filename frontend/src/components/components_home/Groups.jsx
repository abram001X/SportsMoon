/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function Groups({ apiTeamsCopa }) {
  const groupsArray = [];
  apiTeamsCopa.map((element) => {
    element.map((elements) => {
      elements.map((standings) => {
        return groupsArray.includes(standings.group)
          ? null
          : groupsArray.push(standings.group);
      });
    });
  });
  return (
    <>
      <h2 className="h3-style-global">Clasificación</h2>
      <article className="cont_teamsgroups-padre">
        {apiTeamsCopa.map((standings) => {
          return standings.map((elements, k) => {
            return (
              <section key={k} className="cont_groups-child-teamsgroups plate">
                <h3 style={{ marginBottom: '20px' ,'color':'#fff'}}>{groupsArray[k]}</h3>
                {k !== 6 ? (
                  <div className="info_groups-child-teamsgroup ">
                    <div className="p-child-table-groups">
                      <b>EQUIPOS</b>
                    </div>
                    <ul className="ul-child-table-groups ">
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
                ) : null}
                {elements.map((element) => {
                  for (let index = 0; index < groupsArray.length; index++) {
                    if (groupsArray[index] === element.group) {
                      return (
                        <div
                          className="standings-child-cont-groups "
                          key={index}
                        >
                          <div className="table-groups">
                            <div className="p-child-table-groups">
                              <img src={element.team.logo} alt="" />
                              <p className="p-groupsteams">
                                {element.team.name}
                              </p>
                            </div>
                            <ul className="ul-child-table-groups yellow">
                              <li>{element.all.played}</li>
                              <li>{element.all.win}</li>
                              <li>{element.all.draw}</li>
                              <li>{element.all.lose}</li>
                              <li>{element.all.goals.for}</li>
                              <li>{element.all.goals.against}</li>
                              <li>{element.goalsDiff}</li>
                              <li className="points">{element.points}</li>
                            </ul>
                          </div>
                        </div>
                      );
                    }
                  }
                })}
              </section>
            );
          });
        })}
      </article>
    </>
  );
}
