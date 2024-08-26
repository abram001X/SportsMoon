import { useEffect, useState } from 'react';

/* eslint-disable react/prop-types */
export function Calendario({ apiResults, handleActive }) {
  const [dateToday, setDateToday] = useState();
  const [elementos, setElementos] = useState();
  const [num, setNum] = useState(15);
  useEffect(()=>{
    setDateToday('Not Started')
  },[])
  let today = new Date(dateToday);
  today = today + '';
  today = today.slice(0, 15);

  const ordenDate = (a, b) => {
    let dateA = new Date(a.fixture.date);
    let dateB = new Date(b.fixture.date);
    return dateA.getTime() - dateB.getTime();
  };
  apiResults.sort(ordenDate);

  const arrayCopa = apiResults;

  const verify = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setNum(num + 10);
      observer.disconnect();
    }
  };

  const observer = new IntersectionObserver(verify);
  if (elementos) {
    const elemento = elementos[elementos.length - 2];
    observer.observe(elemento);
    setElementos(null);
  }
  return (
    <>
      <h2 className="h3-style-global">Calendario</h2>
      <input
        className="calendario-child"
        type="date"
        min="1924-01-01"
        max="2025-01-01"
        onChange={(e) => {
          if (e.target.value == '') {
            return setDateToday('Not Started');
          }
          setDateToday(
            `${e.target.value.slice(0, 4)}-${parseInt(
              e.target.value.slice(5, 8)
            )}-${parseInt(e.target.value.slice(8, 10))}`
          );
        }}
      />
      <section className="cont_teamsresults-padre white">
        {arrayCopa.map((elements, j) => {
          let fecha = new Date(elements.fixture.date);
          fecha = fecha + '';
          fecha = fecha.slice(0, 15);

          if (elements.fixture.status.long == dateToday || fecha == today) {
            if (j <= num) {
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
                        <img
                          src={elements.teams.away.logo}
                          alt=""
                          onLoad={() => {
                            j == num - 2
                              ? setElementos(
                                  document.querySelectorAll('.cont_teams-child')
                                )
                              : '';
                          }}
                        />
                        <p>{elements.teams.away.name}</p>
                      </div>
                      <b className="b-results-child">{elements.goals.away}</b>
                    </div>
                  </section>
                  <div className="fecha_results-child">
                    <p>
                      {fecha.slice(11)}/{fecha.slice(8, 10)} {fecha.slice(0, 8)}
                    </p>
                  </div>
                </article>
              );
            }
          }
        })}
      </section>
    </>
  );
}
