// Importerer Link og Outlet fra react-router-dom
// Link brukes til navigasjon uten at siden lastes på nytt
// Outlet brukes til å vise nested routes (child routes)
import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function CategoryLayout(){

  const [apiData, setApiData] = useState([])
  const [apiEndpoint, setApiEndpoint] = useState()

  const getData = async()=>{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
    const data = await response.json()
    setApiData(data.results)
  }
  
  console.log(apiData)
  console.log(apiEndpoint)

  useEffect(()=>{
    getData()
  },[])


    return (
     <>
        {/* Navigasjonsmeny for kategoriene */}
        <nav className='main-nav'>
          {apiData?.map((item)=><Link key={item.name+'-xt'} to={item.name} onClick={()=> setApiEndpoint(item.url)}>{item.name}</Link>)}
           
        </nav>

        {/* 
          Outlet er plassen hvor child-routes rendres.
          
          Når vi er på:
          /categories      -> <Categories /> vises her
          /categories/sko  -> <Category /> vises her
          
          Det bestemmes av routene definert i App.jsx
        */}
        <Outlet />
    </>
    )
}
