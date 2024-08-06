import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export function Results({ apiResults, handleActive }) {
    const [num,setNum] = useState(10);
    const [elementos, setElementos] = useState()
    useEffect(()=>{
        apiResults.sort(ordenDate);
    },[apiResults])

  const ordenDate = (a, b) => {
    let dateA = new Date(a.fixture.date.slice(0, 10));
    let dateB = new Date(b.fixture.date.slice(0, 10));
    return dateB.getTime() - dateA.getTime();
  };
  const verify = (entries)=>{
    const entry = entries[0]
    if(entry.isIntersecting){
        setNum(num+10)
        observer.disconnect()
    }
  }
  
  
  const observer = new IntersectionObserver(verify)  
  if(elementos){
    const elemento = elementos[elementos.length-2]
    observer.observe(elemento)
    setElementos(null)
}

 
  const arrayCopa = apiResults;

  return (
    <>
      <h2 className="h3-style-global">Resultados</h2>
      <section className="cont_teamsresults-padre white scroll-results">
        <br />
        <br />
        {arrayCopa.map((elements, j) => {
          if (elements.fixture.status.long == 'Match Finished' & j <= num) {
            let fecha = new Date(elements.fixture.date);
            fecha = fecha + '';
            return (
              <>
                <section
                  key={j}
                  className="cont_teams_results-child results plate"
                  onClick={() =>
                    handleActive(
                      true,
                      elements.fixture.id,
                      elements.goals.home,
                      elements.goals.away
                    )
                  }
                >
                  <section className="cont_teams-child results">
                    <div className="teams_results-child">
                      <div className="results-p-img">
                        <img src={elements.teams.home.logo} alt="" />
                        <p>{elements.teams.home.name}</p>
                      </div>
                      <b className="b-results-child">{elements.goals.home}</b>
                    </div>
                    <div className="teams_results-child">
                      <div className="results-p-img">
                        <img src={elements.teams.away.logo} alt="" onLoad={()=> j == num - 2 ? setElementos(document.querySelectorAll('.cont_teams-child')): ''}/>
                        <p>{elements.teams.away.name}</p>
                      </div>
                      <b className="b-results-child">{elements.goals.away}</b>
                    </div>
                  </section>
                  <div className="fecha_results-child">
                    <p style={{ fontSize: '15px' }}>
                      {fecha.slice(0, 8)}
                      {fecha.slice(10, 15)}
                    </p>
                  </div>
                </section>
              </>
            );
          }
        })}
      </section>
    </>
  );
}
