/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { GiChampions } from 'react-icons/gi';
import { FaTableCellsLarge } from 'react-icons/fa6';
import { FaListOl } from 'react-icons/fa';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { GiSoccerBall } from 'react-icons/gi';
import { FiMenu } from 'react-icons/fi';
import { FaStar } from "react-icons/fa6";

export function AsideLeft() {
  const [ruta, setRuta] = useState('eurocopa');
  const [rutaMenu, setRutaMenu] = useState('');

  return (
    <>
      <aside className="cont_asideleft_padre">
        <section className="cont_leagues-child-asideleft white">
          <h3 className="black h2back">
            <GiSoccerBall className='icon' /> Leagues
          </h3>
          <section className="child-asideleft">
            <section className="league-child-cont_leagues eurocopa ">
              <img
                src="https://media.api-sports.io/football/leagues/4.png"
              />
              <Link
                to={`/eurocopa/${rutaMenu}`}
                onClick={() => setRuta('eurocopa')}
              >
                Eurocopa
              </Link>
            </section>
            <section className="league-child-cont_leagues copaamerica">
              <img
                src="https://media.api-sports.io/football/leagues/9.png"
                alt=""
              />
              <Link
                to={`/copaamerica/${rutaMenu}`}
                onClick={() => setRuta('copaamerica')}
              >
                Copa América
              </Link>
            </section>
          </section>
        </section>
        <section className="cont_information-child-asideleft white">
          <h3 className="black h2back">
            <FiMenu className='icon' /> About
          </h3>
          <section className="child-asideleft about">
            <Link to={`/${ruta}/teams`} onClick={() => setRutaMenu('teams')}>
              <FaListOl className='icon' /> Teams
            </Link>

            <Link to={`/${ruta}/groups`} onClick={() => setRutaMenu('groups')}>
              <FaTableCellsLarge className='icon'/> Groups
            </Link>

            <Link
              to={`/${ruta}/results`}
              onClick={() => setRutaMenu('results')}
            >
              <GiChampions className="icon" /> Results
            </Link>

            <Link
              to={`/${ruta}/calendario`}
              onClick={() => setRutaMenu('calendario')}
            >
              <BsCalendar2DateFill className='icon'/> Calendario
            </Link>
          </section>
        </section>
        <section className="teams_favorite-child-asideleft white">
          <h4 className='black h2back'>
          <FaStar className='icon'/>
          Favorite Teams
          </h4>
          <section className="child-asideleft about">
            <a href="#">Venezuela</a>
            <a href="#">Argentina</a>
            <a href="#">Alemania</a>
            <a href="#">España</a>
            <a href="#">Colombia</a>
            <a href="#">Uruguay</a>
          </section>
        </section>
        <Outlet />
      </aside>
    </>
  );
}
