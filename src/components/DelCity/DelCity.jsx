import { useState, useEffect } from 'react'
import * as citiesAPI from '../../../utilities/city-api'

export default function DelCity({ user}) {
  const [cities, setCities] = useState([]);
  useEffect(function(){
    async function getCities() {
      const cities = await citiesAPI.getCities(user);
      setCities(cities);
    }
    getCities();
  },[]);

  async function handleDelete(evt) {
    const deletedCity = await citiesAPI.delCity(evt.target.id)
    const updatedCities = cities.filter(city => city._id != deletedCity._id)
    setCities(updatedCities)
  }

  return (
    <>
    {cities.map(city =>(
      <div key={city._id}>
        {city.city}  , {city.state_code} <button onClick={handleDelete} id={city._id}> Delete </button>
      </div> )   
    )}

    </>
  )
}