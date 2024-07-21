/* eslint-disable react/prop-types */
import { Groups } from './components_home/Groups.jsx';
import { Link, useParams } from 'react-router-dom';
import { TableTeams } from './components_home/TableTeams.jsx';
import { useEffect, useState } from 'react';
import { Results } from './components_home/Results.jsx';
import { Calendario } from './components_home/Calendario.jsx';
import { Estadisticas } from './components_home/Estadisticas.jsx';

export function Home({ leagues }) {
  const [apiStandings, setapiStandings] = useState([]);
  const [apiCalendario, setApiCalendario] = useState([]);
  const [season, setSeason] = useState(2023);
  const [active, setActive] = useState(false);
  const [estadistica, setEstadistica] = useState([]);
  const [goalHome, setGoalHome] = useState();
  const [goalAway, setGoalAway] = useState();
  const [fixture, setFixture] = useState();
  const handleActive = (
    bolean,
    fixtureId = null,
    homeGoal = null,
    awayGoal = null
  ) => {
    if (bolean) {
      setFixture(fixtureId);
    }
    setActive(bolean);
    setGoalHome(homeGoal);
    setGoalAway(awayGoal);
  };
  const { leagueId, type, league, seccion } = useParams();
  useEffect(() => {
    /*Estadisitica*/
    fetch(`http://localhost:3000/api/estadistica/${fixture}`)
      .then((res) => res.json())
      .then((data) => {
        setEstadistica(data.response);
      });

    //standings
    fetch(`http://localhost:3000/api/standings/${leagueId}/${season}`)
      .then((res) => res.json())
      .then((data) =>
        setapiStandings(
          data.response.map((elements) => {
            return elements.league.standings;
          })
        )
      );

    // calendario
    fetch(`http://localhost:3000/api/calendario/${leagueId}/${season}`)
      .then((res) => res.json())
      .then((data) => {
        setApiCalendario(data.response);
      });
  }, [leagueId, season, fixture]);

  const orderLeague = (a, b) => {
    let dateA = a.seasons.year;
    let dateB = b.seasons.year;
    return dateA - dateB;
  };
  const leaguesDate = leagues;
  leaguesDate.sort(orderLeague);

  return (
    <>
      <article className="cont_home_padre white ">
        <section className="league_title h2back">
          <div className='secciones-home'>
          <h3  style={{'color': '#000', 'border-right': '1px solid #777', 'padding': '0px 10px'}}>
          {league}
          </h3>
          <Link
            to={`/info/${type}/${league}/clasificacion/${leagueId}`}
            className="cont_secciones-home"
          >
            <p className={seccion == 'clasificacion' ? 'press': null}>Clasificación</p>
            
          </Link>
          <Link
            href="#results"
            to={`/info/${type}/${league}/resultados/${leagueId}`}
            className="cont_secciones-home"
            
          >
            <p className={seccion == 'resultados' ? 'press': null}>Resultados</p>
            
          </Link>
          <Link
            to={`/info/${type}/${league}/calendario/${leagueId}`}
            className="cont_secciones-home"
          >
            <p className={seccion == 'calendario' ? 'press': null}>Calendario</p>
            
          </Link>
          
          </div>
          <div className="cont_select-label">
          
            <label htmlFor="seasons">Año :</label>
            <select
              name="seasons"
              value={season}
              className="select_home"
              onChange={(e) => {
                setSeason(e.target.value);
              }}
            >
              {leaguesDate.map((elements, j) => {
                if (elements.league.id == leagueId) {
                  return elements.seasons.reverse().map((element) => {
                    return (
                      <option key={j} value={element.year}>
                        {element.year}
                      </option>
                    );
                  });
                }
              })}
            </select>
          </div>
        </section>
        <Estadisticas
          active={active}
          handleActive={handleActive}
          estadistica={estadistica}
          goalAway={goalAway}
          goalHome={goalHome}
        />

        {(type == 'Cup') & (seccion == 'clasificacion') ? (
          <Groups apiTeamsCopa={apiStandings} />
        ) : null}
        {(type == 'League') & (seccion == 'clasificacion') ? (
          <TableTeams apiStandings={apiStandings} />
        ) : null}
        {seccion == 'resultados' ? (
          <Results apiResults={apiCalendario} handleActive={handleActive} />
        ) : null}

        {seccion == 'calendario' ? (
          <Calendario
            apiResults={apiCalendario}
            season={season}
            handleActive={handleActive}
          />
        ) : null}
      </article>
    </>
  );
}
