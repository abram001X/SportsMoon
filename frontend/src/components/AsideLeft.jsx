/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { GiSoccerBall } from 'react-icons/gi';

export function AsideLeft({leagues}) {

  const bestFootballCups = [
    "FIFA World Cup",
    "UEFA Champions League",
    "English Premier League",
    "La Liga",
    "Bundesliga",
    "Serie A",
    "Ligue 1",
    "Copa Libertadores",
    "Copa America",
    "UEFA European Championship",
    "FIFA Club World Cup",
    "Copa del Rey",
    "DFB-Pokal",
    "Coppa Italia",
    "Coupe de France",
    "Eredivisie",
    "Primeira Liga",
    "Brasileirao Serie A",
    "Argentine Primera Division",
    "Major League Soccer"
  ];


  console.log(leagues);
  const betterLeagues = leagues.filter((element) => {
    return bestFootballCups.includes(element.league.name);
  });

  return (
    <>
      <aside className="cont_asideleft_padre">
        <section className="cont_leagues-child-asideleft white">
          <h3 className="black h2back">
            <GiSoccerBall className="icon" />
            <Link to={`/leagues/World`} className='a-asideleft'>Leagues</Link>
          </h3>
          <section className="child-asideleft">
            {betterLeagues.map((element, j) => {
              return (
                <Link
                  key={j}
                  to={`/info/${element.league.type}/${element.league.id}`}
                  className="league-child-cont_leagues eurocopa"
                >
                  <img src={element.league.logo} />
                  {element.league.name}
                </Link>
              );
            })}
          </section>
        </section>
      </aside>
    </>
  );
}
