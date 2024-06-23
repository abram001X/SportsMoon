/* eslint-disable react/prop-types */

export function AsideLeft({ apiLeague }) {
  return (
    <>
      <aside className="cont_asideleft_padre">
        <h1>Aside</h1>
        <section className="cont_leagues-child-asideLeft">
          {apiLeague.map((elements,j) => {
            return (
            <div key={j}>
              <p ></p>
            </div>
            )
          })}
        </section>
      </aside>
    </>
  );
}
