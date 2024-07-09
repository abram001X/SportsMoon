import { TeamsGroups } from './components_home/Groups.jsx';
import { Routes, Route,Link, useParams} from 'react-router-dom';
import { Teams } from './components_home/Teams.jsx';
import { useEffect, useState } from 'react';
import { Results } from './components_home/Results.jsx';
import { GiChampions } from 'react-icons/gi';
import { FaTableCellsLarge } from 'react-icons/fa6';
import { FaListOl } from 'react-icons/fa';
import { BsCalendar2DateFill } from 'react-icons/bs';
// eslint-disable-next-line react/prop-types
export function Home() {
  const [apiStandings, setapiStandings] = useState([]);
  const [apiCalendario, setApiCalendario] = useState([]);
  const [season, setSeason] = useState(2024);
  const {leagueId} = useParams()
  console.log(leagueId)

  useEffect(() => {
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
        setApiCalendario(data.response)
      });

  }, [leagueId,season]);

  console.log(apiStandings)
  console.log(apiCalendario)

  return (
    <>
      <article className="cont_home_padre white">
      <section className="cont_information-child-home white">
            <Link to={`/info/teams/${leagueId}`} >
              <FaListOl className="icon" /> Teams
            </Link>

            <Link to={`/info/groups/${leagueId}`}>
              <FaTableCellsLarge className="icon" /> Groups
            </Link>

            <Link
              to={`/info/results/${leagueId}`}

            >
              <GiChampions className="icon" /> Results
            </Link>

            <Link
              to={`info/calendario/${leagueId}`}
            >
              <BsCalendar2DateFill className="icon" /> Calendario
            </Link>
        </section>
        <section className='league_title'>
          <h3>icon: League</h3>
          <select name="seasons" id="" onChange={(e)=>{setSeason(e.target.value)}}>
            <option value="">Seasons</option>
          </select>
        </section>
        <Routes>
          <Route path={`/groups/${leagueId}`} element={<TeamsGroups apiTeamsCopa={apiStandings}/>}/>
          <Route path={`/info/teams/${leagueId}`} element={<Teams apiStandings={apiStandings}/>} />
          <Route path={`/results/${leagueId}`} element={<Results apiResults={apiCalendario} resultCalendario={true}/>}/>
          <Route  path={`/calendario/${leagueId}`} element={<Results apiResults={apiCalendario} resultCalendario={false}/>}/>
        </Routes>
      </article>
      
    </>
  );
}
