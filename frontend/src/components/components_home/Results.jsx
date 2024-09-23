import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

/* eslint-disable react/prop-types */
export function Results({ apiResults, handleActive }) {
  const [num, setNum] = useState(10);
  const [ocultar, setOcultar] = useState(true);
  const [arrayCopa, setArrayCopa] = useState(apiResults);
  useEffect(() => {
    const ordenDate = (a, b) => {
      let dateA = new Date(a.fixture.date.slice(0, 10));
      let dateB = new Date(b.fixture.date.slice(0, 10));
      return dateB.getTime() - dateA.getTime();
    };
    setArrayCopa(apiResults.sort(ordenDate))
  },[apiResults]);
  console.log(arrayCopa)
  return (
    <>
      <h2 className="h3-style-global">Resultados</h2>
      <section className="cont_teamsresults-padre white">
        <br />
        <br />
        { arrayCopa && arrayCopa.map((elements, j) => {
            if (elements.fixture.status.long == 'Match Finished' && j <= num) {
              let fecha = new Date(elements.fixture.date);
              fecha = fecha + '';
              fecha = fecha.slice(0, 15);
              return (
                <section
                  key={j}
                  className="cont_teams_results-child results plate"
                  onClick={() =>
                    handleActive(
                      true,
                      elements.fixture.id,
                      elements.goals.home,
                      elements.goals.away
                    )
                  }
                >
                  <section className="cont_teams-child results imgLoad">
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
                    <p>
                      {fecha.slice(11)}/{fecha.slice(8, 10)} {fecha.slice(0, 8)}
                    </p>
                  </div>
                </section>
              );
            }
          })}
      </section>
      {ocultar ? (
        <button
          className="load_result"
          onClick={() => {
            setNum(arrayCopa.length);
            setOcultar(false);
          }}
        >
          Más partidos <FaArrowRight className="icon oc" />
        </button>
      ) : (
        ''
      )}
    </>
  );
}
