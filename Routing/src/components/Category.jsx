// Importerer useParams-hooken fra react-router-dom
// useParams brukes for å hente URL-parametere (f.eks :slug)
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Category(){

    const [apiData, setApiData] = useState([])

    // useParams returnerer et objekt med alle parametere fra URL-en
    // Siden vi har definert path=':slug' i App.jsx, vil den hente verdien som står der
    // Eksempel: /categories/sko → slug = "sko"
    const { slug } = useParams()
    const getSingleData = async()=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
    const data = await response.json()
    setApiData(data)
    }

    console.log(apiData)

    useEffect(()=>{
        getSingleData()
    },[slug])
    // Returnerer JSX
    // Viser verdien av slug inne i en <h1>-tag
    return (
        <main>
            <h1>{apiData?.name}</h1>
            <section>
                <h2>Bilder</h2>
                <img src={apiData?.sprites?.front_default} alt={apiData?.name}/>
            </section>
        </main>
    )
}
