import { useState } from 'react';

/* eslint-disable react/prop-types */
export function MenuGames({ apiCopaAmerica, apiEuroCopa }) {
  const [copaSelect, setCopaSelect] = useState(apiEuroCopa);
  const winner = 'winner-child-menugames';
  const loser = 'loser-child-menugames';

  const gamesPast = (
    copaSelect === apiCopaAmerica ? copaSelect : apiEuroCopa
  ).filter((elements) => {
    return elements.fixture.status.long === 'Match Finished';
  });

  const handleLeague = (copa) => {
    if (copa == 'america') {
      setCopaSelect(apiCopaAmerica);
    } else setCopaSelect(apiEuroCopa);
  };

  return (
    <menu className="cont_menugames-padre">
      <section className="league-child-menugames">
        <select name="" id="" onChange={(e) => handleLeague(e.target.value)}>
          <option value="eurocopa">Eurocopa</option>
          <option value="america">Copa América</option>
        </select>
      </section>
      {gamesPast.map((elements, j) => {
        return (
          <article className="cont_games-child-menugames" key={j}>
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
    </menu>
  );
}
