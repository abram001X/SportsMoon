/* eslint-disable react/prop-types */
import { TiThLarge } from "react-icons/ti";

export function AsideRight({homeApi}){
    console.log(homeApi)

    return(
        <article className="cont_asideright-padre">
            <h3 className="h2back"><TiThLarge className="icon"/> Titulares</h3>
            <section className="cont-articles-child white" >
                
                    {homeApi.map((element,j) =>{
                        return(
                        <section className="articles-child" key={j}>
                            <a className="titulares-a" href={element.source_url}>{element.title}</a>
                        </section>)
                    })}     
            </section>
        </article>
    )
}   