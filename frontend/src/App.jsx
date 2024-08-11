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
  const [isLoad, setIsLoad] = useState(false)
  useEffect(() => {
    const fetching = async ()=>{
      setIsLoad(true)
      const response = await fetch(`${URL}/api/leagues`)   
      const response2 = await fetch(`${URL}/api/news`)
      const data  = await response.json();
      const data2 = await response2.json()
      setLeagues(data.response);
      setHomeApi(data2.results)
      setIsLoad(false)
    }
    fetching()
  },[]);
  
  
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
        <div className='aviso'><p className='p_aviso'>¡Aviso! Algunos campeonatos no muestran información, la api que utilizo me limita las peticiones. Lo siento :(</p></div>
      <AsideLeft leagues={leagues} isLoad={isLoad}/>
        <Routes>
          <Route path="/" element={<Inicio homeApi={homeApi}  isLoad={isLoad}/>} />
          <Route
            path="/leagues/:country"
            element={<Leagues leagues={leagues} isLoad={isLoad}/>}
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
