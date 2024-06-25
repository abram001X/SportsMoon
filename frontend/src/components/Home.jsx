import { TeamsGroups } from "./components_home/teamsGroups.jsx";
import {Routes,Route} from 'react-router-dom'
export function Home() {
  
  return (
    <>
    
      <article className="cont_home_padre">
        <Routes>
          <Route path="/groups" element={<TeamsGroups/>}>
          
          </Route>
        </Routes>
        
      </article>
      
      
     
    </>
  );
}
