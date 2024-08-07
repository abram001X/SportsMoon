import { useState } from 'react';

/* eslint-disable react/prop-types */
export function Calendario({ apiResults, handleActive }) {
  const [dateToday, setDateToday] = useState(null);
  let today = new Date(dateToday);
  today = today + '';
  today = today.slice(0, 15);

  const ordenDate = (a, b) => {
    let dateA = new Date(a.fixture.date);
    let dateB = new Date(b.fixture.date);
    return dateB.getTime() - dateA.getTime();
  };
  apiResults.sort(ordenDate);
console.log(today);

  const arrayCopa = apiResults;

  return (
    <>
    <h2 className="h3-style-global">Calendario</h2>
      {!dateToday ? (
            <>
              <br /><h2 className="h1-año" style={{textAlign:'start'}}>Elige la fecha de una jornada</h2>
            </>
          ) : (
            ''
          )}
      <input
        className="calendario-child"
        type="date"
        min="1924-01-01"
        max="2025-01-01"
        onChange={(e) => {
          setDateToday(
            `${e.target.value.slice(0, 4)}-${parseInt(
              e.target.value.slice(5, 8)
            )}-${parseInt(e.target.value.slice(8, 10))}`
          );
          console.log(e.target.value);
        }}
      />
      <section className="cont_teamsresults-padre white">
        {arrayCopa.map((elements, j) => {
          let fecha = new Date(elements.fixture.date);
          fecha = fecha + '';
          fecha = fecha.slice(0, 15);
          if (fecha == today) {
            return (
              <article
                key={j}
                className="cont_teams_results-child  plate"
                onClick={() =>
                  handleActive(
                    true,
                    elements.fixture.id,
                    elements.goals.home,
                    elements.goals.away
                  )
                }
              >
                <section className="cont_teams-child results">
                  <div className="teams_results-child">
                    <div className="results-p-img">
                      <img src={elements.teams.home.logo} alt="" />
                      <p>{elements.teams.home.name}</p>
                    </div>
                    <b className="b-results-child">{elements.goals.home}</b>
                  </div>
                  <div className="teams_results-child">
                    <div className="results-p-img">
                      <img src={elements.teams.away.logo} alt="" />
                      <p>{elements.teams.away.name}</p>
                    </div>
                    <b className="b-results-child">{elements.goals.away}</b>
                  </div>
                </section>
                <div className="fecha_results-child">
                  <p >
                    {fecha.slice(11)}/{fecha.slice(8,10)} {fecha.slice(0, 8)}
                    
                  </p>
                </div>
              </article>
            );
          }
        })}
      </section>
    </>
  );
}
