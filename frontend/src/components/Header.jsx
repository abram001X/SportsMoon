import { FaHouse } from "react-icons/fa6";
import { Link} from 'react-router-dom';


export function Header(){
    return (
        <>
        <header className="cont_header_padre">
                <h2>SportsMoon</h2>
                <form action="">
                <input type="text" className="input-header_padre" placeholder='🔍'/>
                </form>    
                <Link className="p_icon-header" to={`/`}><FaHouse />
                </Link>
        </header> 
        </>
    )
}