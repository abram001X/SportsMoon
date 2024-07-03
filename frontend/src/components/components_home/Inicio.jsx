import { useEffect, useState } from "react"

export function Inicio(){
    const [homeApi, setHomeApi] = useState([])

useEffect(()=>{
    fetch('https://newsdata.io/api/1/latest?country=ve&category=sports&apikey=pub_4787349d17bdef1a8a8f2e332f0dd038c6ce0')
    .then((res) => res.json())
    .then((data) =>{setHomeApi(data.results)})
},[])

console.log('home',homeApi)
return(
    <section className="cont_news-padre">
    {homeApi.map((element,j)=>{
        return(
            <section className="news-child-cont_news white" key={j}>
                <section className="news-child">
                <img className='img-news-child' src={element.image_url} alt="" />
                <h2 className="">{element.title}</h2>
                <p className="child-news">{element.description}</p>
                </section>
                
            </section>
        )
    })
    }
    </section>
)    
}