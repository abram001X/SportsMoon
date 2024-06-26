import { TeamsGroups } from "./components_home/teamsGroups.jsx";
import {Routes,Route} from 'react-router-dom'
export function Home() {
  
  return (
    <>
    
      <article className="cont_home_padre">
        <Routes>
          <Route path="eurocopa/groups" element={<TeamsGroups copa={'eurocopa'}/>}>
          </Route>
          <Route path="copaamerica/groups" element={<TeamsGroups copa={'copaamerica'}/>}/>
        </Routes>
        
      </article>
      
      
     
    </>
  );
}
