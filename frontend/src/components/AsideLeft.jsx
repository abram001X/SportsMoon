/* eslint-disable react/prop-types */
import { useState } from 'react'
import {Link, Outlet} from 'react-router-dom'

export function AsideLeft() {
  const [ruta, setRuta] = useState('eurocopa')
  const [rutaMenu, setRutaMenu] = useState('')

  return (
    <>
      <aside className="cont_asideleft_padre blue">
        <section className="cont_leagues-child-asideleft child-asideleft">
          <h2>Leagues</h2>
          <section className="league-child-cont_leagues eurocopa">
            <img
              src="https://media.api-sports.io/football/leagues/4.png"
              alt=""
            />
            <Link to={`/eurocopa/${rutaMenu}`} onClick={()=>setRuta('eurocopa')}>Eurocopa</Link>
          </section>
          <section className="league-child-cont_leagues copaamerica">
            <img
              src="https://media.api-sports.io/football/leagues/9.png"
              alt=""
            />
            <Link to={`/copaamerica/${rutaMenu}`} onClick={()=>setRuta('copaamerica')}  >Copa América</Link>
          </section>
        </section>
        <section className="cont_information-child-asideleft child-asideleft">
          <h2>About</h2>

          <Link to={`/${ruta}/teams`}  onClick={()=> setRutaMenu('teams')}>Icon:Teams</Link>

          <Link to={`/${ruta}/groups`}  onClick={()=> setRutaMenu('groups')}>Icon:Groups</Link>

          <Link to={`/${ruta}/results`}   onClick={()=> setRutaMenu('results')}>Icon:Results</Link>

          <Link to={`/${ruta}/calendario`}  onClick={()=>setRutaMenu('calendario')}>Calendario</Link>
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
