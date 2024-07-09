import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { AsideLeft } from './components/AsideLeft';
import { Home } from './components/Home';
import { MenuGames } from './components/MenuGames';
import { Inicio } from './components/components_home/Inicio';
import { Leagues } from './components/Leagues';
function App() {
  const [homeApi, setHomeApi] = useState([])
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/news')
      .then((res) => res.json())
      .then((data) =>{setHomeApi(data)})
    
      fetch('http://localhost:3000/api/leagues')
      .then((res) => res.json())
      .then((data) => {
        setLeagues(data.response);
      });
  }, []);

  return (
    <>
      <MenuGames/>
      <Header
      ></Header>
      <section className='poster'>
        <img src="https://ideogram.ai/assets/image/lossless/response/VKDwGTrlToKRpSqChp59kA" alt="" />
      </section>
      <article className="cont_interface">
        <AsideLeft leagues={leagues}/>
        <Routes>
          <Route path='/' element={<Inicio homeApi={homeApi}/>}></Route>
          <Route path='/info/:etiqueta/:leagueId' element={<Home/>}></Route>
          <Route path='/leagues/:country' element={<Leagues leagues={leagues}/>}></Route>
        </Routes>
        
      </article>
      <footer className='cont_footer-padre'>
          <p>© 2024 AbrahamAlfonzo</p>
          <p>abrahamalfonzo11@gmail.com</p>
        </footer>
    </>
  );
}

export default App;
