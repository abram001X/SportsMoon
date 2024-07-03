import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { AsideLeft } from './components/AsideLeft';
import { Home } from './components/Home';
import { MenuGames } from './components/MenuGames';
import { AsideRight } from './components/components_home/AsideRight';
function App() {

  const [apiCopaAmerica, setApiCopaAmerica] = useState([]);
  const [apiEuroCopa, setApiEuroCopa] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3000/api/calendario/copaamerica')
      .then((res) => res.json())
      .then((data) => {
        setApiCopaAmerica(data.response);
      });

    fetch('http://localhost:3000/api/calendario/eurocopa')
      .then((res) => res.json())
      .then((data) => {
        setApiEuroCopa(data.response);
      });

  }, []);

  console.log(apiCopaAmerica)
  console.log(apiEuroCopa)
  return (
    <>
    <MenuGames
        apiCopaAmerica={apiCopaAmerica}
        apiEuroCopa={apiEuroCopa}
      ></MenuGames>
      <Header
        apiCopaAmerica={apiCopaAmerica}
        apiEuroCopa={apiEuroCopa}
      ></Header>
      <section className='poster'>
        <img src="https://ideogram.ai/assets/image/lossless/response/VKDwGTrlToKRpSqChp59kA" alt="" />
      </section>
      <article className="cont_interface">
        <AsideLeft
          apiCopaAmerica={apiCopaAmerica}
          apiEuroCopa={apiEuroCopa}
        ></AsideLeft>
        <Home apiCopaAmerica={apiCopaAmerica} apiEuroCopa={apiEuroCopa}></Home>
        <AsideRight/>      
      </article>
      
    </>
  );
}

export default App;
