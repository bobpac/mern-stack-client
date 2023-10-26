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
  console.log(`getCityInfoFromZipCode - zipCode = ${zipCode}`)
  const res =  await sendRequest(`${BASE_URL}/zipcode/${zipCode}`)  
  console.log(`getCityInfoFromZipCode - res.then = ${res.then}`)
  return res;
}