// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import City from '../City/City'

export default function ShowCity({ cities }) {

  // cities.length ? console.log(`cities = ${JSON.stringify(cities)}`) : console.log('No cities yet');
  
  const myCities = cities.map(city =>
    <City 
       key = {city._id}
       city = {city.city}
       state = {city.state_code}/>
    )
  return (
    <>
       {myCities}
    </>
  )
}