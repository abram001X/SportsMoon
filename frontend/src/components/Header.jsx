
import { FaHouse } from "react-icons/fa6";
import { Link} from 'react-router-dom';
import { GoSearch } from "react-icons/go";
import { FaFutbol } from "react-icons/fa";
import { HiMoon } from "react-icons/hi2";
import { FaExternalLinkAlt } from "react-icons/fa";


export function Header(){
    return (
        <>
        <header className="cont_header_padre black">
                <section className="cont-buscador-padre">
                    <Link className="title-inicio"to={'/'} > <HiMoon className="icon-header moon"/>
                    SportMoon</Link>
                </section>
                <section className="buscador-header">
                <form action="">
                    <input type="search" className="input-header_padre" placeholder='Buscar'/><button className="search-button" alt="Buscar" type="submit"><GoSearch />
                    </button>
                    </form>  
                    <div className="cont-child-header  no-padding">
                    <Link to={`/info/League/Premier%20League/clasificacion/39`} className="cont-child-header row" >
                    <FaFutbol className="icon-header" /> <p className="none_px">Fútbol</p>
                    </Link >
                    <div className="bloque-links">
                        <Link to={`/info/League/Premier%20League/clasificacion/39`}>Clasificacion <FaExternalLinkAlt className="icon_menu"/>
                        </Link>
                        <Link to={`/info/League/Premier%20League/resultados/39`}>Resultados <FaExternalLinkAlt className="icon_menu"/>
                        </Link>
                        <Link to={`/info/League/Premier%20League/calendario/39`}>Calendario <FaExternalLinkAlt className="icon_menu"/>
                        </Link>
                        <Link to={`/info/leagues/World`}>Ligas <FaExternalLinkAlt className="icon_menu"/>
                        </Link>
                    </div>
                    </div>
                    <Link to={`/`} className="cont-child-header row">
                        <FaHouse  className="icon-header"/> <p className='none_px'>Inicio</p>
                    </Link>

                </section>
                    
        </header> 
        </>
    )
}