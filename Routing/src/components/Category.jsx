// Importerer useParams-hooken fra react-router-dom
// useParams brukes for å hente URL-parametere (f.eks :slug)
import { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function Category(){
    const {apiEndpoint, defaultApiUrl} = useOutletContext()

    const [apiData, setApiData] = useState([])
    const [spritesImg, setSpritesImg] = useState([])

    // useParams returnerer et objekt med alle parametere fra URL-en
    // Siden vi har definert path=':slug' i App.jsx, vil den hente verdien som står der
    // Eksempel: /categories/sko → slug = "sko"
    const { slug } = useParams()
    console.log("Denne kommer fra Category",apiEndpoint)

    const getSingleData = async()=>{
    const response = await fetch(apiEndpoint ? apiEndpoint : defaultApiUrl + slug)
    const data = await response.json()
    
    setApiData(data)
    }

    console.log("Cat", apiData, apiEndpoint)


    // console.log("key values:", Object.keys(apiData?.sprites))

    useEffect(()=>{
        getSingleData()
        // setSpritesImg(Object.keys(apiData?.sprites))
    },[slug, apiEndpoint])

    console.log("mine bilder", spritesImg)

    // Returnerer JSX
    // Viser verdien av slug inne i en <h1>-tag
    return (
        <main>
            <h1>{apiData?.name}</h1>
            <section>
                <h2>Bilder</h2>
                {/* {spritesImg?.map((item) => <img src={apiDate?.sprites?.front_default} alt={apiData?.name})} */}
                <img src={apiData?.sprites?.front_default} alt={apiData?.name}/>
            </section>
        </main>
    )
}
