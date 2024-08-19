/* eslint-disable react/prop-types */
import { Groups } from './components_home/Groups.jsx';
import { Link, useParams } from 'react-router-dom';
import { TableTeams } from './components_home/TableTeams.jsx';
import { useEffect, useState } from 'react';
import { Results } from './components_home/Results.jsx';
import { Calendario } from './components_home/Calendario.jsx';
import { Estadisticas } from './components_home/Estadisticas.jsx';
import { Loading } from './Loading.jsx';
const URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

export function Home() {
  const [apiStandings, setapiStandings] = useState([]);
  const [apiCalendario, setApiCalendario] = useState([]);
  const [season, setSeason] = useState();
  const [isLoad, setIsLoad] = useState(false);
  const [active, setActive] = useState(false);
  const [estadistica, setEstadistica] = useState([]);
  const [goalHome, setGoalHome] = useState();
  const [goalAway, setGoalAway] = useState();
  const [fixture, setFixture] = useState();
  const [leagues, setLeagues] = useState([]);
  const { leagueId, type, league, seccion } = useParams();

  useEffect(() => {
    /*Estadisitica*/
    fetch(`${URL}/api/estadistica/${fixture}`)
    .then((res) => res.json())
    .then((data) => {
        setEstadistica(data.response);
      });
  }, [fixture]);

useEffect(() => {
    const fetching = async () => {
      //standings
      setIsLoad(true);
      
      const response = await fetch(
        `${URL}/api/standings/${leagueId}/${season}`
      );
      const response2 = await fetch(`${URL}/api/calendario/${leagueId}/${season}`)
      const data = await response.json();
      const data2 = await response2.json();

      // calendario
      setapiStandings(
        data.response.map((elements) => {
          return elements.league.standings;
        })
      );
      setApiCalendario(data2.response);
      setIsLoad(false);
    };
    fetching();
}, [season,leagueId]);
  
  
  useEffect(() => {
    //leagues
    fetch(`${URL}/api/leagues`)
    .then((res) => res.json())
    .then((data) => {
      setLeagues(data.response);
    });
  }, []);

  //const [bool, setBool] = useState(false)
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


  const orderLeague = (a, b) => {
    let dateA = a.seasons.year;
    let dateB = b.seasons.year;
    return dateA - dateB;
  };
  const leaguesDate = leagues;
  leaguesDate.sort(orderLeague);
  const dates = [];
  leaguesDate.map((elements) => {
    if (elements.league.id == leagueId) {
      return elements.seasons.map((element) => {
        dates.push(element.year);
      });
    }
  });
  console.log(apiStandings);

  return (
    <>
      <article className="cont_home_padre white">
        <section className="league_title h2back flex-column">
          <div className="secciones-home flex-column">
            <h3 className="h3-home">{league}</h3>
            <Link
              to={`/info/${type}/${league}/clasificacion/${leagueId}`}
              className="cont_secciones-home"
            >
              <p className={seccion == 'clasificacion' ? 'press' : null}>
                Clasificación
              </p>
            </Link>
            <Link
              href="#results"
              to={`/info/${type}/${league}/resultados/${leagueId}`}
              className="cont_secciones-home"
            >
              <p className={seccion == 'resultados' ? 'press' : null}>
                Resultados
              </p>
            </Link>
            <Link
              to={`/info/${type}/${league}/calendario/${leagueId}`}
              className="cont_secciones-home"
            >
              <p className={seccion == 'calendario' ? 'press' : null}>
                Calendario
              </p>
            </Link>
          </div>
          <div className="cont_select-label">
            <label
              htmlFor="seasons"
            >
              Año :
            </label>
            <select
              
              name="seasons"
              value={season}
              className="select_home"
              onChange={(e) => {
                setSeason(e.target.value);
              }}
            >
              {dates.reverse().map((element, j) => {
                return (
                  <option key={j} value={element}>
                    {element}
                  </option>
                );
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
        <article className="components-render">
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
              handleActive={handleActive}
            />
          ) : null}
          {isLoad ? (
            <Loading />
          ) : !season && seccion != 'calendario' ? (
            <>
              <br /> <h1 className="h1-año">Elige el año de la temporada</h1>
            </>
          ) : (
            ''
          )}
        </article>
      </article>
    </>
  );
}
