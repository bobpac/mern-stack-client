import "./AddCity.css";
import { useState, useEffect } from 'react'
import { getCityInfoFromZipCode } from "../../../utilities/city-api"

export default function AddCity({ handleAddCity }) {
  const [zipCode, setZipCode] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault()
    const res = getCityInfoFromZipCode(zipCode)
    console.log(`getCityInfoFromZipCode res=${res.then}`);
    const results1 = res.body.results
    const results = results1[Object.keys(results1)[0]]
    if (Array.isArray(results)) {
      console.log(`done 3.1`)
      delete results[0].city_en
      delete results[0].state_en
      console.log(`done 3.2`)
      console.log(results[0])
      console.log(`done 3.3`)
      console.log(JSON.stringify(results[0]))
      console.log(`done 3.31`)

      // res.json(JSON.stringify(results[0]))

      console.log(`done 3.4`)
      // res.status(200)
      console.log(`done 4`)
    } else {
      // zip code is invalid
      console.log(`zip code is invalid`)
    }
    console.log(`handleSubmit - cityObj=${JSON.stringify(cityObj)}`)
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