
import { FaHouse } from "react-icons/fa6";
import { Link} from 'react-router-dom';
import { GoSearch } from "react-icons/go";
import { FaFutbol } from "react-icons/fa";
import { HiMoon } from "react-icons/hi2";

import { FaTableList } from "react-icons/fa6";
import { MdKeyboardCommandKey } from "react-icons/md";

import { BsCalendar2DateFill } from "react-icons/bs";
import { RxTable } from "react-icons/rx";


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
                        <Link to={`/info/League/Premier%20League/clasificacion/39`}>Clasificacion <FaTableList className="icon_menu"/>
                        </Link>
                        <Link to={`/info/League/Premier%20League/resultados/39`}>Resultados <MdKeyboardCommandKey className="icon_menu"/>
                        </Link>
                        <Link to={`/info/League/Premier%20League/calendario/39`}>Calendario <BsCalendar2DateFill  className="icon_menu"/>
                        </Link>
                        <Link to={`/leagues/World`}>Ligas <RxTable className="icon_menu"/>
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