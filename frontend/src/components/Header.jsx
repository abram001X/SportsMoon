import { FaHouse } from "react-icons/fa6";



export function Header(){
    return (
        <>
        <header className="cont_header_padre">
                <h2>SportsMoon</h2>
                <form action="">
                <input type="text" className="input-header_padre" placeholder='🔍'/>
                </form>    
                <p className="p_icon-header"><FaHouse />
                </p>
        </header> 
        </>
    )
}