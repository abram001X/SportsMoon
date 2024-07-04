import { useEffect, useState } from "react"

export function Inicio(){
    const [homeApi, setHomeApi] = useState([])

useEffect(()=>{
    fetch('http://localhost:3000/api/news')
    .then((res) => res.json())
    .then((data) =>{setHomeApi(data)})
},[])

console.log('home',homeApi)
return(
    <section className="cont_news-padre">
    {homeApi.map((element,j)=>{
        return(
            <section className="news-child-cont_news white" key={j}>
                <section className="cont_details-child">
                    <img className="img_icon_news" src={element.source_icon} alt="" />
                    <p>{element.keywords[0].toUpperCase()}</p>
                </section>
                <section className="news-child">
                <img className='img-news-child' src={element.image_url} alt="" />
                <section className="hp-news-child">
                    <h3 className="">{element.title}</h3><br />
                    <p className="child-news">{element.description.slice(0,element.description.lastIndexOf('appeared'))}</p>
                </section>
                </section>
                
            </section>
        )
    })
    }
    </section>
)    
}