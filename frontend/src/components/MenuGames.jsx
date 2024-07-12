import { useEffect, useState } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { GoChevronLeft } from 'react-icons/go';
/* eslint-disable react/prop-types */
export function MenuGames() {
  const [copa, setCopa] = useState([]);
  const [season, setSeason] = useState(2024)
  const [league, setLeague] = useState(4)
  const winner = 'winner-child-menugames';
  const loser = 'loser-child-menugames';

  const contenedorMenu = document.querySelector(
    '.cont_menugames-scroll-child');

  useEffect(()=>{
    fetch(`http://localhost:3000/api/calendario/${league}/${season}`)
    .then((res) => res.json())
    .then((data) => {
      setCopa(data.response)
    })   
  },[season,league])

  console.log(copa)
  const gamesPast = copa.filter((elements) => {
    return elements.fixture.status.long === 'Match Finished';
  });

  const handleLeague = (copa) => {
    contenedorMenu.style.transform = `translateX(-${0}px)`;
  };

  let transAme = 0;
  const handleTrans = (direction) => {
    contenedorMenu.style.transition = '.8s'
      if ((direction === 'right') & (transAme < 600)) {
        transAme += 600;
        contenedorMenu.style.transform = `translateX(-${transAme}px)`;
      }
      if (direction === 'left') {
        transAme === 0 ? transAme = 0 : transAme -= 600;
        contenedorMenu.style.transform = `translateX(-${transAme}px)`;
      }
  };
  return (
    <>
      <menu className="cont_menugames-padre black">
        <section className="league-child-menugames black">
          <select
            className="black"
            name=""
            id=""
            onChange={(e) => handleLeague(e.target.value)}
          >
            <option value="2">UEFA Champions League</option>
            <option value="39">Premier League</option>
            <option value="78">Bundesliga</option>
            <option value="3">UEFA Europa League</option>
            <option value="140">La Liga</option>
            <option value="135">Serie A</option>
          </select>
        </section>
        <button
          onClick={() => {
            handleTrans('left');
          }}
          className="black deslis"
          style={{'transform' : 'translateX(-2px)'}}
        >
          <GoChevronLeft />
        </button>
        <article className="cont_menugames-scroll-child ">
          {gamesPast.map((elements, j) => {
            return (
              <article className="cont_games-child-menugames black" key={j}>
                <div className="div-child-menugames">
                  <img
                    src={elements.teams.home.logo}
                    alt=""
                    className="img-child-menugames"
                  />
                  <p className={elements.teams.home.winner ? winner : loser}>
                    {elements.teams.home.name.slice(0, 3)}
                  </p>
                  <b>{elements.goals.home}</b>
                </div>
                <div className="div-child-menugames">
                  <img
                    src={elements.teams.away.logo}
                    alt=""
                    className="img-child-menugames"
                  />
                  <p className={elements.teams.away.winner ? winner : loser}>
                    {elements.teams.away.name.slice(0, 3)}
                  </p>
                  <b>{elements.goals.away}</b>
                </div>
              </article>
            );
          })}
        </article>
      </menu>
      <button  style={{'margin-top' : '1px'}}
        onClick={() => {
          handleTrans('right');
        }}
        className="black deslis"
      >
        <GoChevronRight />
      </button>
    </>
  );
}
