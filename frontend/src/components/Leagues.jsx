
import { Link, useParams} from "react-router-dom";

/* eslint-disable react/prop-types */
export function Leagues({ leagues,handleScroll }) {
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
            <h3  className="h3-style-global">Leagues</h3>
            {arrayLeagues.map((element, j) => {
            if (element.country.name ===  country & element.league.type === 'League'){
            return (
                <li key={j} className="li-child-leagues">
                    <section className="links-child-leagues">
                        <Link to={`/info/${element.league.type}/${element.league.name}/${element.league.id}`}>
                        <img src={element.league.logo} alt="" />
                        </Link>
                        <div className="cont_links-info">
                            <Link className="p-link" to={`/info/${element.league.type}/${element.league.name}/${element.league.id}`}><p >{element.league.name}</p></Link>
                            <Link className="a-child-info" to={`/info/${element.league.type}/${element.league.name}/${element.league.id}`} >Clasification</Link>
                            <Link className="a-child-info" to={`/info/${element.league.type}/${element.league.name}/${element.league.id}`} >Results</Link>
                            <Link className="a-child-info" to={`/info/${element.league.type}/${element.league.name}/${element.league.id}`} >Calendario</Link>
                        </div>
                    </section>
                </li>
            );}
            })}
        </ul>
        <ul className="ul-leagues-child">
        <h3 className="h3-style-global">Cups</h3>
            {arrayLeagues.map((element,j)=>{
                if (element.country.name === country & element.league.type === 'Cup'){
                    return (
                        <li key={j} className="li-child-leagues">
                            <Link to={`/info/${element.league.type}/${element.league.name}/${element.league.id}`} className="links-child-leagues">
                                <img src={element.league.logo} alt="" />
                                <div className="cont_links-info">
                                <Link className="p-link" to={`/info/${element.league.type}/${element.league.name}/${element.league.id}`}><p >{element.league.name}</p></Link>
                                    <Link className="a-child-info" to={`/info/${element.league.type}/${element.league.name}/${element.league.id}`} onClick={()=>{handleScroll('.cont_teams-padre')}}>Clasification</Link>
                                    <Link className="a-child-info" to={`/info/${element.league.type}/${element.league.name}/${element.league.id}`} onClick={()=>{handleScroll('.cont_teamsresults-padre')}}>Results</Link>
                                    <Link className="a-child-info" to={`/info/${element.league.type}/${element.league.name}/${element.league.id}`} onClick={()=>{handleScroll('.cont_teamsresults-padre')}}>Calendario</Link>
                                </div>
                            </Link>
                        
                        </li>
                    );}
                })}
        </ul>
    </article>
);
}
