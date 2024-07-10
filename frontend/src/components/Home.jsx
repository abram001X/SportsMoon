/* eslint-disable react/prop-types */
import { TeamsGroups } from './components_home/Groups.jsx';
import {Link, useParams} from 'react-router-dom';
import { Teams } from './components_home/Teams.jsx';
import { useEffect, useState } from 'react';
import { Results } from './components_home/Results.jsx';

import { GiChampions } from 'react-icons/gi';
import { FaTableCellsLarge } from 'react-icons/fa6';
import { FaListOl } from 'react-icons/fa';
import { BsCalendar2DateFill } from 'react-icons/bs';


export function Home({leagues}) {

  const [apiStandings, setapiStandings] = useState([]);
  const [apiCalendario, setApiCalendario] = useState([]);
  const [season, setSeason] = useState(2023);
  const {leagueId, type} = useParams()

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
            <Link to={`/info/teams/`} >
            <FaListOl className="icon" /> Teams
            </Link>

            <Link to={`/info/groups/`}>
            <FaTableCellsLarge className="icon" /> Groups
            </Link>

            <Link to={`/info/results/`}>
            <GiChampions className="icon" /> Results
            </Link>

            <Link
            to={`info/calendario/`}
            >
            <BsCalendar2DateFill className="icon" /> Calendario
            </Link>
        </section> 
        <section className='league_title'>
          <h3>icon: League</h3>
          <select name="seasons" id="" onChange={(e)=>{setSeason(e.target.value)}}>
            {leagues.map((elements,j)=>{
              if(elements.league.id == leagueId){
                return elements.seasons.map((element)=>{
                      
                      return  <option key={j} value={element.year}>{element.year}</option>
                  })
              }
            })}
          </select>
        </section>
        {type === 'Cup' ? <TeamsGroups apiTeamsCopa={apiStandings}/> : null}
        <Teams apiStandings={apiStandings}/>
        <Results apiResults={apiCalendario} resultCalendario={true}/>
        <Results apiResults={apiCalendario} resultCalendario={false}/>
      </article>
    </>
  );
}
