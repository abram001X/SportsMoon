import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { AsideLeft } from './components/AsideLeft';
import { AsideRigth } from './components/AsideRigth';
import { Home } from './components/Home';

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

    fetch('http://localhost:3000/api/copaAmerica')
      .then((res) => res.json())
      .then((data) => {
        setApiCopaAmerica(data.response);
      });

    fetch('http://localhost:3000/api/eurocopa')
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
      <section className="cont_interface">
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
      </section>
    </>
  );
}

export default App;
