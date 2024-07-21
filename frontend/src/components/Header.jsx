import { FaHouse } from "react-icons/fa6";
import { Link} from 'react-router-dom';
import { GoSearch } from "react-icons/go";
import { FaFutbol } from "react-icons/fa";
import { HiMoon } from "react-icons/hi2";


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
                    <Link to={`/info/League/Premier%20League/clasificacion/39`} className="cont-child-header">
                    <FaFutbol className="icon-header" /> Fútbol
                    </Link >
                    <Link to={`/`} className="cont-child-header">
                        <FaHouse  className="icon-header"/> Inicio
                    </Link>
                    
                </section>
                    
        </header> 
        </>
    )
}