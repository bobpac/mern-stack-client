import "./AddCity.css";
import { useState, useEffect } from 'react'
import { getCityInfoFromZipCode } from "../../../utilities/city-api"

export default function AddCity({ handleAddCity }) {
  const [zipCode, setZipCode] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault()
    const cityObj = getCityInfoFromZipCode(zipCode)
    console.log(JSON.stringify(cityObj))
    handleAddCity(cityObj)
  }
  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" 
              name={zipCode} 
              autoFocus
              size="5"
              maxLength="5"
              minLength="5"
              id="zipcode"
              onChange={evt => setZipCode(evt.target.value)} 
              required />
        <input type="submit" value="Add City" />
      </form>
    </>
  )
}