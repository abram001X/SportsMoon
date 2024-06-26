/* eslint-disable react/prop-types */
import { useState } from 'react'
import {Link, Outlet} from 'react-router-dom'

export function AsideLeft() {
  const [ruta, setRuta] = useState('eurocopa')
  
  const ubicate = ()=>{
      const arrayId = ['a','b','c','d']
      return arrayId.map()
  }
  


  return (
    <>
      <aside className="cont_asideleft_padre">
        <section className="cont_leagues-child-asideleft child-asideleft">
          <h2>Leagues</h2>
          <section className="league-child-cont_leagues eurocopa">
            <img
              src="https://media.api-sports.io/football/leagues/4.png"
              alt=""
            />
            <Link to='/eurocopa/groups' onClick={()=>setRuta('eurocopa')}>Eurocopa</Link>
          </section>
          <section className="league-child-cont_leagues copaamerica">
            <img
              src="https://media.api-sports.io/football/leagues/9.png"
              alt=""
            />
            <Link to='/copaamerica/groups' onClick={()=>setRuta('copaamerica')}  >Copa América</Link>
          </section>
        </section>
        <section className="cont_information-child-asideleft child-asideleft">
          <h2>About</h2>

          <Link to={`/${ruta}/teams`}  onClick={()=> ubicate()}>Icon:Teams</Link>

          <Link to={`/${ruta}/groups`}  onClick={()=> ubicate()}>Icon:Groups</Link>

          <Link to={`/${ruta}/players`}   onClick={()=> ubicate()}>Icon:players</Link>

          <Link to={`/${ruta}/results`}   onClick={()=> ubicate()}>Icon:Results</Link>

        </section>
        <section className="teams_favorite-child-asideleft child-asideleft">
          <h3>Favorite Teams</h3>
          <a href="#">Venezuela</a>
          <a href="#">Argentina</a>
          <a href="#">Alemania</a>
          <a href="#">España</a>
          <a href="#">Colombia</a>
          <a href="#">Uruguay</a>
          <a href="">Portugal</a>
        </section>
        <Outlet/>
      </aside>
    </>
  );
}
