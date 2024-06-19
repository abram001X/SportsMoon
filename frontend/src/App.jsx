import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    fetch('https://v1.baseball.api-sports.io/leagues', {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '5aecbdbf507fe9edaaed01e42ae5b531',
        'x-rapidapi-host': 'v3.football.api-sports.io'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.response);
        setApi(data.response);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      {api.map((elements, j) => {
        return (
          <>
            <img src={elements.logo} alt="" />
            <p key={j}>{elements.name}</p>
          </>
        );
      })}
    </>
  );
}

export default App;
