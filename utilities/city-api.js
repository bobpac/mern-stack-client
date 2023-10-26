import sendRequest from './send-request'
import axios from 'axios'

const BASE_URL = 'http://localhost:4741/cities'

export async function addCity(cityData) {
    return sendRequest(BASE_URL, 'POST', cityData)
}

export async function delCity(cityId) {
  return sendRequest(`${BASE_URL}/${cityId}`, 'DELETE')
}

export async function getCities(user) {
  if (user === undefined) return;
  return sendRequest(`${BASE_URL}/${user._id}`)
}

export async function getCityInfoFromZipCode(zipCode) {

  const key = import.meta.env.VITE_ZIPCODESTACK_KEY
  console.log(`key=${key}`)
  const res = await axios.get(`https://api.zipcodestack.com/v1/search?codes=${zipCode}&country=us&apikey=${key}`)
  const results1 = res.data.results
  // results1 = 
  // 34609": [
  //   {
        // "postal_code": "34609",
        // "country_code": "US",
        // "latitude": 28.4794,
        // "longitude": -82.5083,
        // "city": "Spring Hill",
        // "state": "Florida",
        // "city_en": "Spring Hill",
        // "state_en": "Florida",
        // "state_code": "FL"
  //   }
  //   ]

  const results = results1[Object.keys(results1)[0]]
  // results[0] = 
  //     "postal_code": "34609",
  //     "country_code": "US",
  //     "latitude": 28.4794,
  //     "longitude": -82.5083,
  //     "city": "Spring Hill",
  //     "state": "Florida",
  //     "city_en": "Spring Hill",
  //     "state_en": "Florida",
  //     "state_code": "FL"

  // we don't need city_en or state_en
  delete results[0].city_en
  delete results[0].state_en

  return results[0]
  
}