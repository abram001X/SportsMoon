import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loading } from './Loading';
import { Search } from './Search';

/* eslint-disable react/prop-types */
export function Leagues({ leagues, handleScroll, isLoad }) {
  const [num, setNum] = useState();
  const [elementos, setElementos] = useState();
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
  useEffect(() => {
    setNum(21);
  }, [country]);
  const ligas = leagues.filter((element) => {
    return arrayBestLeagues.includes(element.country.name);
  });

  const arrayCountry = ligas.filter((element) => {
    return element.country.name == country;
  });

  const verify = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setNum(num + 15);
      observer.disconnect();
    }
  };
  const observer = new IntersectionObserver(verify);
  if (elementos) {
    const elemento = elementos[elementos.length - 10];
    observer.observe(elemento);
    setElementos(null);
  }
  console.log(leagues);
  
  return (
    <article className="cont_league_padre white ">
      <section className="cont_links-leagues">
        {arrayBestLeagues.map((element, j) => {
          return (
            <Link
              key={j}
              className={`a-child-leagues ${element == country ? 'press' : ''}`}
              to={`/leagues/${element}`}
            >
              {element}
            </Link>
          );
        })}
      </section>
      <br />
      <Search />
      <ul className="ul-leagues-child ul_league">
        <h3 className="h3-style-global">Ligas</h3>
        {isLoad ? (
          <Loading />
        ) : (
          arrayCountry.map((element, j) => {
            if (
              (element.country.name === country) &
              (element.league.type === 'League') &
              (j <= num)
            ) {
              return (
                <li key={j} className={`li-child-leagues scroll`}>
                  <section className="links-child-leagues">
                    <Link
                      to={`/info/${element.league.type}/${element.league.name}/clasificacion/${element.league.id}`}
                    >
                      <img
                        src={element.league.logo}
                        alt=""
                        onLoad={() =>
                          j == num - 10
                            ? setElementos(document.querySelectorAll(`.scroll`))
                            : ''
                        }
                      />
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
          })
        )}
      </ul>
      <ul className="ul-leagues-child ul_league">
        <h3 className="h3-style-global">Copas</h3>
        {arrayCountry.map((element, j) => {
          if (
            (element.country.name === country) &
            (element.league.type === 'Cup') &
            (j < num)
          ) {
            return (
              <li key={j} className={`li-child-leagues  scroll`}>
                <div className="links-child-leagues">
                  <Link
                    to={`/info/${element.league.type}/${element.league.name}/clasificacion/${element.league.id}`}
                    className="links-child-leagues"
                  >
                    <img
                      src={element.league.logo}
                      alt=""
                      onLoad={() => {
                        j == num - 5
                          ? setElementos(document.querySelectorAll(`.scroll`))
                          : '';
                      }}
                    />
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
