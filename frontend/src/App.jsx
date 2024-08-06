import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { AsideLeft } from './components/AsideLeft';
import { Home } from './components/Home';
//import { MenuGames } from './components/MenuGames';
import { Inicio } from './components/components_home/Inicio';
import { Leagues } from './components/Leagues';
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
function App() {
  const [homeApi, setHomeApi] = useState([]);
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    fetch(`${URL}/api/news`)
      .then((res) => res.json())
      .then((data) => {
        setHomeApi(data.results);
      });

    fetch(`${URL}/api/leagues`)
      .then((res) => res.json())
      .then((data) => {
        setLeagues(data.response);
      });
  }, []);
  
  
  return (
    <>
      <Header />
      <section className="poster">
        <img
          src="https://ideogram.ai/assets/image/lossless/response/QmH1pTvDSxqgqgPD1HxULg"
          alt=""
        />
      </section>
      <article className="cont_interface">
        <AsideLeft leagues={leagues} />
        <Routes>
          <Route path="/" element={<Inicio homeApi={homeApi} />} />
          <Route
            path="/leagues/:country"
            element={<Leagues leagues={leagues} />}
          />
          <Route
            path="/info/:type/:league/:seccion/:leagueId"
            element={<Home />}
          />
        </Routes>
      </article>
      <footer className="cont_footer-padre">
        <p>© 2024 AbrahamAlfonzo</p>
        <p>abrahamalfonzo11@gmail.com</p>
      </footer>
    </>
  );
}

export default App;
