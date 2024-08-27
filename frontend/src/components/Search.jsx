import { useState } from 'react';
import { Link } from 'react-router-dom';

const URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
export function Search() {
  const [searchLeague, setSearchLeague] = useState();
  const handleSearch = async (league) => {
    const res = await fetch(`${URL}/search/leagues/${league}`);
    const data = await res.json();
    setSearchLeague(data);
  };
  console.log(searchLeague);
  return (
    <>
      <div className="search-padre">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="search"
            placeholder="Buscar"
            className="search"
            onChange={(e) => {
              if (e.target.value == ''){
                return setSearchLeague()
              }
              handleSearch(e.target.value);
            }}
          />
        </form>
        <div className="searching-child">
          {searchLeague
            ? searchLeague.map((obj, i) => {
                if (i <= 7) {
                  return <Link key={i} to={`/info/${obj.type}/${obj.name}/clasificacion/${obj.leagueId}`} className='search_link-search'>
                      <div className='cont_logo_name-search'>
                      <img src={obj.logo} alt="" />  
                      <p>{obj.name}</p>                  
                      </div>
                  </Link>;
                }
              })
            : ''}
        </div>
      </div>
    </>
  );
}
