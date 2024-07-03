import { useState } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { GoChevronLeft } from 'react-icons/go';
/* eslint-disable react/prop-types */
export function MenuGames({ apiCopaAmerica, apiEuroCopa }) {
  const [copaSelect, setCopaSelect] = useState(apiEuroCopa);
  const winner = 'winner-child-menugames';
  const loser = 'loser-child-menugames';
  const contenedorMenu = document.querySelector(
    '.cont_menugames-scroll-child'
  );
  
  const gamesPast = (
    copaSelect === apiCopaAmerica ? copaSelect : apiEuroCopa
  ).filter((elements) => {
    return elements.fixture.status.long === 'Match Finished';
  });

  const handleLeague = (copa) => {
    if (copa == 'america') {
      setCopaSelect(apiCopaAmerica);
    } else setCopaSelect(apiEuroCopa);
    contenedorMenu.style.transform = `translateX(-${0}px)`;
  };

  let transEuro = 0;
  let transAme = 0;
  const handleTrans = (direction) => {
    contenedorMenu.style.transition = '.8s'
    if ((copaSelect === apiEuroCopa)) {
      if ((direction === 'right') & (transEuro < 2200)) {
        transEuro += 868
        contenedorMenu.style.transform = `translateX(-${transEuro}px)`;
      }
      if (direction === 'left') {
        transEuro === 0 ? transEuro = 0 : transEuro -= 868;
        contenedorMenu.style.transform = `translateX(-${transEuro}px)`;
      }
    } else {
      if ((direction === 'right') & (transAme < 600)) {
        transAme += 600;
        contenedorMenu.style.transform = `translateX(-${transAme}px)`;
      }
      if (direction === 'left') {
        transAme === 0 ? transAme = 0 : transAme -= 600;
        contenedorMenu.style.transform = `translateX(-${transAme}px)`;
      }
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
            <option value="eurocopa">Eurocopa</option>
            <option value="america">Copa América</option>
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
