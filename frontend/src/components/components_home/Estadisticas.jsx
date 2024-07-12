/* eslint-disable react/prop-types */

export function Estadisticas({active,handleActive,estadistica}){
    console.log(estadistica)
    return (
        <section className="cont_estadisticas-padre" style={active ? {'display' : 'flex' }: {'display' : 'none'}} onClick={()=> handleActive(false)}>
            <section className="estadistica-child">
                <p onClick={()=> handleActive(false)} className="ocultar-cont">Ocultar</p>
                <section className="portada"> 
                    {estadistica.map((element,j)=>{
                        return (
                            <section className="puntos-child" key={j}>
                                <img src={element.team.logo} alt="" />
                                <p key={j}>{element.team.name}</p>
                            </section>
                    )
                    })} 
                </section>
                <section className="cont_estadistica">
                    {estadistica.map((element,k)=>{
                        return element.statistics.map(()=>{
                            <section key={k} className="estadistica">
                                <b>{element.type}</b>
                                <b>{element.value}</b>
                            </section>
                        })  
                    })}
                </section>
            </section>
        </section>
    )
}