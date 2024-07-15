/* eslint-disable react/prop-types */
import {Groups } from './components_home/Groups.jsx';
import {useParams} from 'react-router-dom';
import { TableTeams } from './components_home/TableTeams.jsx';
import { useEffect, useState } from 'react';
import { Results } from './components_home/Results.jsx';
import { PiSoccerBallBold } from "react-icons/pi";
import { GiSoccerBall } from "react-icons/gi";


import { FaListOl } from 'react-icons/fa';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { Calendario } from './components_home/Calendario.jsx';
import { Estadisticas } from './components_home/Estadisticas.jsx';


export function Home({leagues}) {

  const [apiStandings, setapiStandings] = useState([]);
  const [apiCalendario, setApiCalendario] = useState([]);
  const [season, setSeason] = useState(2023);
  const [active, setActive] = useState(false);
  const [estadistica, setEstadistica] = useState([])
  const [goalHome, setGoalHome] = useState()
  const [goalAway, setGoalAway] = useState()
  const [fixture, setFixture] = useState()
  const handleActive = (bolean,fixtureId = null,homeGoal=null,awayGoal=null)=>{
    if (bolean) {
        setFixture(fixtureId)
    }
    setActive(bolean)
    setGoalHome(homeGoal)
    setGoalAway(awayGoal)
  }
  const {leagueId, type, league} = useParams()
  useEffect(() => {
    
    /*Estadisitica*/ 
    fetch(`http://localhost:3000/api/estadistica/${fixture}`)
        .then((res) => res.json())
        .then((data) => {
            setEstadistica(data.response)
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
        setApiCalendario(data.response)
      });


  }, [leagueId,season,fixture]);
  console.log(apiStandings)
  console.log(season)

  const orderLeague = (a,b)=>{
      let dateA = a.seasons.year
      let dateB = b.seasons.year 
      return dateA - dateB
  }
  const leaguesDate = leagues
  leaguesDate.sort(orderLeague)

  
  
  return (
    <>
      <article className="cont_home_padre white">
        
      <section className="cont_information-child-home white">
            <a  href='#clasification' className='etiquetas-info'>
            <FaListOl className="icon" /> Clasifiación
            </a>
            <a href="#results" className='etiquetas-info'><PiSoccerBallBold className='icon'/> Resultados</a>
            <a href='#calendario' className='etiquetas-info'>
            <BsCalendar2DateFill className="icon" /> calendario
          </a>
        </section> 
        <section className='league_title'>
          <h3><GiSoccerBall className='icon'/> {league}</h3>
          <div className='cont_select-label'>
          <label htmlFor="seasons">Año :</label>
          <select name="seasons" value={season} className='select_home' onChange={(e)=>{setSeason(e.target.value)}}>
            {leaguesDate.map((elements,j)=>{
              if(elements.league.id == leagueId){
                return elements.seasons.reverse().map((element)=>{
                      return  <option key={j} value={element.year}>{element.year}</option>
                  })
              }
            })}
          </select>
          </div>
          
        </section>
        
        <Estadisticas active={active} handleActive={handleActive} estadistica={estadistica} goalAway={goalAway} goalHome={goalHome}/>
        <hr id='clasification' />
        <h2  className="h3-style-global"  >Clasificación</h2>
        {type == 'Cup' ? <Groups apiTeamsCopa={apiStandings}/> : <TableTeams apiStandings={apiStandings}/>}
        <hr  />
        <h2  className="h3-style-global">Resultados</h2>
        <Results apiResults={apiCalendario} handleActive={handleActive}/>
        <h2 className='h3-style-global' id='results'>Calendario</h2>
        <Calendario apiResults={apiCalendario} season={season} handleActive={handleActive}/>
      </article>
    </>
  );
}
