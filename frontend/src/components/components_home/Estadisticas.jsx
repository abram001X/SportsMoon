/* eslint-disable react/prop-types */

export function Estadisticas({active,handleActive,estadistica,goalAway, goalHome}){
    console.log(estadistica)
    return (
        <section className="cont_estadisticas-padre" style={active ? {'display' : 'flex' }: {'display' : 'none'}} onClick={()=> handleActive(false)}>
            <section className="estadistica-child">
                <section className="cont_estadistica">
                    {estadistica.map((element,j)=>{
                        console.log(element);
                        if(element == estadistica[0]){
                            return(
                        <>
                            <section className="puntos-child" key={j}>
                                <div className="top-bloques-estadisticas">
                                <img src={element.team.logo} alt="" />
                                <p className="ey">{element.team.name}</p>
                                </div>
                            <ul  className="lista-estadisticas"> 
                                {element.statistics.map((elements,k)=>{
                                    return(
                                        <li key={k}>{elements.value === null ? 0 : elements.value}</li>
                                    )})}
                            </ul> 
                            </section>
                            <section className="puntos-child">
                                <div className="top-bloques-estadisticas b-stats">
                                    <b>{goalHome}</b>
                                    <b>-</b>
                                    <b>{goalAway}</b>
                                </div>
                                <ul className="lista-estadisticas"> 
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
                            <section className="puntos-child" key={j}>
                            <div  className="top-bloques-estadisticas">
                                <img src={element.team.logo} alt="" />
                                <p >{element.team.name}</p>
                            </div>
                            <ul key={j} className="lista-estadisticas"> 
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