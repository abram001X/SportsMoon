/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
export function TeamsGroups({apiTeamsCopa}) {
  const groupsEuroCopa = () => {
    const groupsArray = [
      'Group A',
      'Group B',
      'Group C',
      'Group D',
      'Group E',
      'Group F'
    ];
    console.log(apiTeamsCopa)
    return (
      <>
        {apiTeamsCopa.map((standings) => {
          return standings.map((elements, k) => {
            return (
              <section key={k} className="cont_groups-child-teamsgroups">
                <h3>{groupsArray[k]}</h3>
                {k !== 6 ? (
                  <div className="info_groups-child-teamsgroup ">
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
                ) : (
                  <p hidden>s</p>
                )}
                {elements.map((element, j) => {
                  for (let index = 0; index < groupsArray.length; index++) {
                    if (groupsArray[index] === element.group) {
                      return (
                        <div className="standings-child-cont-groups " key={j}>
                          <div className="table-groups">
                            <div className="p-child-table-groups">
                              <img src={element.team.logo} alt="" />
                              <p className="p-groupsteams">
                                {element.team.name}
                              </p>
                            </div>
                            <div className="b-child-table-groups">
                              <b>{element.all.played}</b>
                              <b>{element.all.win}</b>
                              <b>{element.all.draw}</b>
                              <b>{element.all.lose}</b>
                              <b>{element.all.goals.for}</b>
                              <b>{element.all.goals.against}</b>
                              <b>{element.goalsDiff}</b>
                              <b className="points">{element.points}</b>
                            </div>
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
      </>
    );
  };

  
  return (
    <article className="cont_teamsgroups-padre">
      {groupsEuroCopa()}
    </article>
  );
}
