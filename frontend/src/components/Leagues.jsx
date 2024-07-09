
import { Link, useParams} from "react-router-dom";

/* eslint-disable react/prop-types */
export function Leagues({ leagues }) {
const {country} = useParams()
console.log(country)
const arrayBestLeagues = [
    'England',
    'World',
    'Spain',
    'Germany',
    'Italy',
    'Brazil',
    'Portugal',
    'France',
    'Argentina',
    'Venezuela'
];
const arrayLeagues = leagues.filter((element) => {
    return arrayBestLeagues.includes(element.country.name);
});
return (
    <article className="cont_league_padre white">
        <section className="cont_links-leagues">
            {arrayBestLeagues.map((element,j)=>{
                return (
                    <Link key={j} className="a-child-leagues" to={`/leagues/${element}`} style={country === element ? {'background': '#333'}: {}}>
                        {element}
                    </Link>
                )
            })}
        </section>
        <ul className="ul-leagues-child ul_league">
            <h3>Leagues</h3>
            {arrayLeagues.map((element, j) => {
            if (element.country.name ===  country & element.league.type === 'League'){
            return (
                <li key={j} className="li-child-leagues">
                    <section className="links-child-leagues">
                        <Link>
                        <img src={element.league.logo} alt="" />
                        </Link>
                        <div className="cont_links-info">
                            <Link className="p-link"><p >{element.league.name}</p></Link>
                            <Link className="a-child-info" to={`/info/teams/${element.league.id}`}>Teams</Link>
                            <Link className="a-child-info" to={`/info/groups/${element.league.id}`}>Position</Link>
                            <Link className="a-child-info" to={`/info/results/${element.league.id}`}>partidos</Link>
                        </div>
                    </section>
                </li>
            );}
            })}
        </ul>
        <ul className="ul-leagues-child">
        <h3>Cups</h3>
            {arrayLeagues.map((element,j)=>{
                if (element.country.name === country & element.league.type === 'Cup'){
                    return (
                        <li key={j} className="li-child-leagues">
                            <Link to={`/info/teams/${element.league.id}`} className="links-child-leagues">
                                <img src={element.league.logo} alt="" />
                                <div className="cont_links-info">
                                    <p>{element.league.name}</p>
                                    <Link className="a-child-info" to={`/info/teams/${element.league.id}`}>Teams</Link>
                                    <Link className="a-child-info" to={`/info/groups/${element.league.id}`}>Position</Link>
                                    <Link className="a-child-info" to={`/info/results/${element.league.id}`}>partidos</Link>
                                </div>
                            </Link>
                        
                        </li>
                    );}
                })}
        </ul>
    </article>
);
}
