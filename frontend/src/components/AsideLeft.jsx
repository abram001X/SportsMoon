/* eslint-disable react/prop-types */

export function AsideLeft({ apiCopaAmerica, apiEuroCopa }) {

  return (  
    <>
      <aside className="cont_asideleft_padre">
        <section className="cont_leagues-child-asideleft child-asideleft">
        <h2>Leagues</h2>
          <section className="league-child-cont_leagues eurocopa">
            <img
              src="https://media.api-sports.io/football/leagues/4.png"
              alt=""
            />
            <p>Eurocopa</p>
          </section>
          <section className="league-child-cont_leagues copaamerica">
            <img
              src="https://media.api-sports.io/football/leagues/9.png"
              alt=""
            />
            <p>Copa América</p>
          </section>
        </section>
        <br/>
        <section className="cont_nextgames-child-asideleft child-asideleft">
              <h2>Groups</h2>
              
        </section>
      </aside>
    </>
  );
}
