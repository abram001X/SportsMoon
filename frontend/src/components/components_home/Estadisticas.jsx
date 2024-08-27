/* eslint-disable react/prop-types */
import { CiCircleRemove } from "react-icons/ci";

export function Estadisticas({active,handleActive,estadistica,goalAway, goalHome}){
    return (
        <section className="cont_estadisticas-padre " style={active ? {'display' : 'flex' }: {'display' : 'none'}}>
            <section className="estadistica-child ">
                <div className="icon-statics plate" onClick={()=> handleActive(false)}>
                <CiCircleRemove />
                </div>
                <section className="cont_estadistica ">
                    {estadistica.map((element,j)=>{
                        if(element == estadistica[0]){
                            return(
                        <>
                            <section className="puntos-child plate" key={j}>
                                <div className="top-bloques-estadisticas plate">
                                <img src={element.team.logo} alt="" />
                                <p className="ey p-groupsteams">{element.team.name}</p>
                                </div>
                            <ul  className="lista-estadisticas plate"> 
                                {element.statistics.map((elements,k)=>{
                                    return(
                                        <li  key={k}>{elements.value === null ? 0 : elements.value}</li>
                                    )})}
                            </ul> 
                            </section>
                            <section className="puntos-child plate">
                                <div className="top-bloques-estadisticas b-stats yellow">
                                    <b>{goalHome}</b>
                                    <b>-</b>
                                    <b>{goalAway}</b>
                                </div>
                                <ul className=" element-type yellow"> 
                                {element.statistics.map((elements,k)=>{
                                    return(
                                        <li key={k}>{elements.type}</li>
                                    )})}
                                </ul> 
                            </section>
                            
                        </>
                        )
                        }else{
                            return (
                                <>
                            <section className="puntos-child plate" key={j}>
                            <div  className="top-bloques-estadisticas ">
                                <img src={element.team.logo} alt="" />
                                <p className="ey p-groupsteams">{element.team.name}</p>
                            </div>
                            <ul key={j} className="lista-estadisticas plate"> 
                                {element.statistics.map((elements,k)=>{
                                    return(
                                        <li key={k}>{elements.value === null ? 0 : elements.value}</li>
                                    )})}
                            </ul>
                            </section>
                            </>
                            ) 
                        }
                        
                    })}
                </section>
            </section>
        </section>
    )
}// <p onClick={()=> handleActive(false)} className="ocultar-cont">Ocultar</p>