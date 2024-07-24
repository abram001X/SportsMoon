/* eslint-disable react/prop-types */
import { AsideRight } from "./AsideRight"

export function Inicio({homeApi}){
return(
    <>
    <article className="cont_inicio_padre white">
    <section className="cont_news-padre">
    {homeApi.map((element,j)=>{
        if(element.description != null & element.image_url != null){

        return(
            <section className="news-child-cont_news white" key={j}>
                <section className="cont_details-child">
                    <img className="img_icon_news" src={element.source_icon} alt="" />
                    <a href={element.source_url} className="a-news">{element.source_id.toUpperCase()}.COM</a>
                </section>
                <a href={element.source_url} className="news-child">
                <img className='img-news-child' src={element.image_url} alt="" />
                <span>{element.keywords[0].toUpperCase()}</span>
                <section className="hp-news-child">

                    <h3 >{element.title}</h3><br />
                    <p className="child-news-p">{element.description.slice(0,element.description.lastIndexOf('appeared'))}...</p>
                </section>
                </a>
                
            </section>
        )}
    })
    }
    </section>
    
    </article>
    <AsideRight homeApi={homeApi}/> 
    </>
)    
}