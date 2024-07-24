
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

/* eslint-disable react/prop-types */
export function Leagues({ leagues, handleScroll }) {
  const [num, setNum] = useState(21);
  const [elementos, setElementos] = useState()
  const { country } = useParams();
  const arrayBestLeagues = [
    'England',
    'World',
    'Spain',
    'Germany',
    'Italy',
    'Brazil',
    'Portugal',
    'France',
    'Argentina',
    'Venezuela'
  ];

  const ligas = leagues.filter((element) => {
    return arrayBestLeagues.includes(element.country.name);
  });
  const arrayCountry = ligas.filter((element) => {
    return element.country.name == country;
  });

  const verify = (entries) => {
    const entry = entries[0];
    if(entry.isIntersecting){
      setNum(num + 21)
    }
  };

  
    if(elementos){
      const elemento = elementos[elementos.length - 4]
      const observer = new IntersectionObserver(verify)
      observer.observe(elemento);
    }
   
  
  
  return (
    <article className="cont_league_padre white" >
      <section className="cont_links-leagues">
        {arrayBestLeagues.map((element, j) => {
          return (
            <Link
              key={j}
              className={`a-child-leagues ${element == country ? 'press': ''}`}
              to={`/leagues/${element}`}
              
            >
              {element}
            </Link>
          );
        })}
      </section>
      <ul className="ul-leagues-child ul_league">
        <h3 className="h3-style-global">Ligas</h3>
        {arrayCountry.map((element, j) => {
          if (
            (element.country.name === country) &
            (element.league.type === 'League') &
            (j <= num)
          ) {
            return (
              <li key={j} className={`li-child-leagues`}>
                <section className="links-child-leagues">
                  <Link
                    to={`/info/${element.league.type}/${element.league.name}/clasificacion/${element.league.id}`}
                  >
                    <img src={element.league.logo} alt="" onLoad={()=> j == num - 3 ? setElementos(document.querySelectorAll('.links-child-leagues')) :''}/>
                  </Link>
                  <div className="cont_links-info">
                    <Link
                      className="p-link"
                      to={`/info/${element.league.type}/${element.league.name}/clasificacion/${element.league.id}`}
                    >
                      <p>{element.league.name}</p>
                    </Link>
                    <Link
                      className="a-child-info"
                      to={`/info/${element.league.type}/${element.league.name}/clasificacion/${element.league.id}`}
                    >
                      Clasificacion
                    </Link>
                    <Link
                      className="a-child-info"
                      to={`/info/${element.league.type}/${element.league.name}/resultados/${element.league.id}`}
                    >
                      Resultados
                    </Link>
                    <Link
                      className="a-child-info"
                      to={`/info/${element.league.type}/${element.league.name}/calendario/${element.league.id}`}
                    >
                      Calendario
                    </Link>
                  </div>
                </section>
              </li>
            );
          }
        })}
      </ul>
      <ul className="ul-leagues-child">
        <h3 className="h3-style-global">Copas</h3>
        {arrayCountry.map((element, j) => {
          if (
            (element.country.name === country) &
            (element.league.type === 'Cup') &
            (j < num)
          ) {
            return (
              <li key={j} className={`li-child-leagues`}>
                <div className='links-child-leagues'>
                <Link
                  to={`/info/${element.league.type}/${element.league.name}/clasificacion/${element.league.id}`}
                  className="links-child-leagues"
                >
                  <img src={element.league.logo} alt="" onLoad={()=> j == num - 3  ? setElementos(document.querySelectorAll('.links-child-leagues')) : ''}/>
                </Link>
                  <div className="cont_links-info">
                    <Link
                      className="p-link"
                      to={`/info/${element.league.type}/${element.league.name}/clasificacion/${element.league.id}`}
                    >
                      <p>{element.league.name}</p>
                    </Link>
                    <Link
                      className="a-child-info"
                      to={`/info/${element.league.type}/${element.league.name}/clasificacion/${element.league.id}`}
                      onClick={() => {
                        handleScroll('.cont_teams-padre');
                      }}
                    >
                      Clasificacion
                    </Link>
                    <Link
                      className="a-child-info"
                      to={`/info/${element.league.type}/${element.league.name}/resultados/${element.league.id}`}
                      onClick={() => {
                        handleScroll('.cont_teamsresults-padre');
                      }}
                    >
                      Resultados
                    </Link>
                    <Link
                      className="a-child-info"
                      to={`/info/${element.league.type}/${element.league.name}/calendario/${element.league.id}`}
                      onClick={() => {
                        handleScroll('.cont_teamsresults-padre');
                      }}
                    >
                      Calendario
                    </Link>
                  </div>
                  </div>
              </li>
            );
          }
        })}
      </ul>
    </article>
  );
}
