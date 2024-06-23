import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { AsideLeft } from './components/AsideLeft';
import { AsideRigth } from './components/AsideRigth';
import { Home } from './components/Home';
import { MenuGames } from './components/MenuGames';
function App() {
  const [apiLeague, setApiLeague] = useState([]);
  const [apiCopaAmerica, setApiCopaAmerica] = useState([]);
  const [apiEuroCopa, setApiEuroCopa] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/league')
      .then((res) => res.json())
      .then((data) => {
        setApiLeague(data.response);
      });

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

  return (
    <>
      <Header
        apiLeague={apiLeague}
        apiCopaAmerica={apiCopaAmerica}
        apiEuroCopa={apiEuroCopa}
      ></Header>
      <MenuGames apiCopaAmerica={apiCopaAmerica} apiEuroCopa={apiEuroCopa}></MenuGames>
      <article className="cont_interface">
        <AsideLeft
          apiLeague={apiLeague}
          apiCopaAmerica={apiCopaAmerica}
          apiEuroCopa={apiEuroCopa}
        ></AsideLeft>
        <Home></Home>
        <AsideRigth
          apiLeague={apiLeague}
          apiCopaAmerica={apiCopaAmerica}
          apiEuroCopa={apiEuroCopa}
        ></AsideRigth>
      </article>
    </>
  );
}

export default App;
