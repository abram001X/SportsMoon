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
const API_KEY = import.meta.env.VITE_API_KEY;
export function Home() {
  const [apiStandings, setapiStandings] = useState([]);
  const [apiCalendario, setApiCalendario] = useState([]);
  const [season, setSeason] = useState('Años');
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
    const fetchStats = async () => {
      const res = await fetch(
        `https://v3.football.api-sports.io/fixtures/statistics?fixture=${fixture}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': `${API_KEY}`
          }
        }
      );
      const data = await res.json();
      setEstadistica(data.response);
    };
    if (fixture) {
      fetchStats();
    }
  }, [fixture]);

  useEffect(() => {
    const fetching = async () => {
      //standings
      setIsLoad(true);
      const resStan = await fetch(
        `https://v3.football.api-sports.io/standings?league=${leagueId}&season=${season}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': `${API_KEY}`
          }
        }
      );
      const resCa = await fetch(
        `https://v3.football.api-sports.io/fixtures?league=${leagueId}&season=${season}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': `${API_KEY}`
          }
        }
      );
      const dataStan = await resStan.json();
      const dataCa = await resCa.json();

      // calendario
      setapiStandings(
        dataStan.response.map((elements) => {
          return elements.league.standings;
        })
      );
      setApiCalendario(dataCa.response);
      setIsLoad(false);
    };
    if (leagueId && season) {
      fetching();
    }
  }, [season, leagueId]);

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
  
  const dates = ['Años'];
  leagues.map((elements) => {
    if (elements.league.id == leagueId) {
      return elements.seasons.map((element) => {
        dates.push(element);
      });
    }
  });

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
            <label htmlFor="seasons">Año :</label>
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
              <br /> <h1 className="h1-año">Elije el año de la temporada</h1>
            </>
          ) : (
            ''
          )}
        </article>
      </article>
    </>
  );
}
