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
        <section className="cont_information-child-asideleft child-asideleft">
          <h2>About</h2>
          <a href="#">Icon:Teams</a>

          <a href="#">Icon:Groups</a>

          <a href="#">Icon:players</a>

          <a href="">Icon:Results</a>
        </section>
        <section className="teams_favorite-child-asideleft child-asideleft">
          <h3>Favorite Teams</h3>
          <a href="#">Venezuela</a>
          <a href="#">Argentina</a>
          <a href="#">Alemania</a>
          <a href="#">España</a>
          <a href="#">Colombia</a>
          <a href="#">Uruguay</a>
          <a href="">Portugal</a>
        </section>
      </aside>
    </>
  );
}
