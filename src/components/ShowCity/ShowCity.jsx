// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as citiesAPI from '../../../utilities/city-api'
export default function ShowCity({ user}) {

  const [cities, setCities] = useState([]);
  useEffect(function(){
    async function getCities() {
      const cities = await citiesAPI.getCities(user);
      setCities(cities);
    }
    getCities();
  },[]);

  async function handleShow(evt) {
    console.log(`handleShow - evt.target.id=${evt.target.id}`)
    const city = await citiesAPI.getWeatherForCity(evt.target.id)
    console.log(`handleShow - city = ${JSON.stringify(city)}`)
  }

  return (
    <>
    {cities.map(city =>(
      <div key={city._id}>
        {city.city}  , {city.state_code} <button onClick={handleShow} id={city._id}> Get Weather </button>
      </div> )   
    )}

    </>
  )
  
}