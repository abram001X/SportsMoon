import { FaHouse } from "react-icons/fa6";
import { Link} from 'react-router-dom';
import { RiTableFill } from "react-icons/ri";

export function Header(){
    return (
        <>
        <header className="cont_header_padre black">
                <Link className="title-inicio" to={'/'}><h2>SportsMoon</h2></Link>
                <form action="">
                <input type="text" className="input-header_padre" placeholder='🔍 Buscar Equipos o Partidos...'/>
                </form>    
                <Link to={`/leagues/World`} className="cont-child-header">
                    <RiTableFill className="icon-header"/>
                    <p>Leagues</p>
                </Link>
                <Link to={`/`} className="cont-child-header">
                    <FaHouse  className="icon-header"/>
                    <p>Inicio</p>
                </Link>
        </header> 
        </>
    )
}