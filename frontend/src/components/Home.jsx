import { TeamsGroups } from './components_home/Groups.jsx';
import { Routes, Route } from 'react-router-dom';
import { Teams } from './components_home/Teams.jsx';
import { useEffect, useState } from 'react';
import { Results } from './components_home/Results.jsx';

// eslint-disable-next-line react/prop-types
export function Home({ apiEuroCopa, apiCopaAmerica}) {
  const [apiTeamsCopaAmerica, setApiTeamsCopaAmerica] = useState([]);
  const [apiTeamsEuroCopa, setApiTeamsEuroCopa] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/standings/copaamerica')
      .then((res) => res.json())
      .then((data) =>
        setApiTeamsCopaAmerica(
          data.response.map((elements) => {
            return elements.league.standings;
          })
        )
      );

    fetch('http://localhost:3000/api/standings/eurocopa')
      .then((res) => res.json())
      .then((data) =>
        setApiTeamsEuroCopa(
          data.response.map((elements) => {
            return elements.league.standings;
          })
        )
      );
  }, []);

  //console.log('CopaAmerica: ', apiTeamsCopaAmerica);
  //console.log('EuroCopa : ', apiTeamsEuroCopa);

  return (
    <>
      <article className="cont_home_padre">
        <Routes>
          <Route
            path="eurocopa/groups"
            element={
              <TeamsGroups
                apiTeamsCopa={apiTeamsEuroCopa}
              />
            }
          ></Route>
          <Route path="eurocopa/teams" element={<Teams apiTeamsCopa={apiTeamsEuroCopa}/>} />
          <Route path='eurocopa/results' element={<Results apiResults={apiEuroCopa}/>}/>

          <Route
            path="copaamerica/groups"
            element={
              <TeamsGroups
                apiTeamsCopa={apiTeamsCopaAmerica}
                
              />
            }
          />
          <Route path='copaamerica/teams' element={<Teams apiTeamsCopa={apiTeamsCopaAmerica}/>}/>
            <Route path='copaamerica/results' element={<Results apiResults={apiCopaAmerica}/>}/>
        </Routes>
        
      </article>
    </>
  );
}
