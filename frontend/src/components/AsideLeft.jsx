/* eslint-disable react/prop-types */
import { useState } from 'react';
import {Link, Outlet} from 'react-router-dom'

export function AsideLeft() {

  const [press, setPress]  = useState('nopress')
  const ubicate = (id)=>{
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
            <p>Eurocopa</p>
          </section>
          <section className="league-child-cont_leagues copaamerica">
            <img
              src="https://media.api-sports.io/football/leagues/9.png"
              alt=""
            />
            <p>Copa América</p>
          </section>
        </section>
        <section className="cont_information-child-asideleft child-asideleft">
          <h2>About</h2>
          <Link to='/teams' className={press} onClick={()=> ubicate('a')}>Icon:Teams</Link>

          <Link to='/groups' className={press} onClick={()=> ubicate('b')}>Icon:Groups</Link>

          <Link to='/players' className={press} onClick={()=> ubicate('c')}>Icon:players</Link>

          <Link to='/results' className={press} onClick={()=> ubicate('d')}>Icon:Results</Link>
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
