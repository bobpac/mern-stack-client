import { useState, useEffect } from 'react'
import * as citiesAPI from '../../../utilities/city-api'

export default function City({ city , state, id , action, user}) {
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
    console.log(deletedCity)
    const updatedCities = cities.filter(city => city._id != deletedCity._id)
    console.log(updatedCities)
    setCities(updatedCities)
  }
  if ( action === 'show' ) {
    return (
      <div>
        {city}  , {state}
      </div> )
  } else {
    return (
      <div>
        {city}  , {state} <button onClick={handleDelete} id={id}> Delete </button>
      </div> )
  }

    
}