/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { GiSoccerBall } from 'react-icons/gi';
import { GoLinkExternal } from "react-icons/go";

export function AsideLeft({leagues}) {

  const bestFootballCups = [
    135,
    140,
    3,
    78,
    39,
    2,
    61,
    1,
    143,
    531,
    71,
    299,
    45,
    13,
    4
  ];


  console.log(leagues);
  const betterLeagues = leagues.filter((element) => {
    return bestFootballCups.includes(element.league.id);
  });

  return (
    <>
      <aside className="cont_asideleft_padre">
        <section className="cont_leagues-child-asideleft white">
          <h3 className=" h2back">
          <GiSoccerBall className="icon" />Mejores Ligas
          </h3>
          <h4  className='h4_leagues-asideleft'> 
            <Link to={`/leagues/World`} className='links_leagues-asideleft'>Ligas <GoLinkExternal className='icon icon-league'/>
            </Link>
          </h4>
          <section className="child-asideleft">
            {betterLeagues.map((element, j) => {
              return (
                <Link
                  key={j}
                  to={`/info/${element.league.type}/${element.league.name}/clasificacion/${element.league.id}`}
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
