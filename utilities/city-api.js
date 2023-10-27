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
  return sendRequest(`${BASE_URL}`)
}

export async function getCityInfoFromZipCode(zipCode) {
  const res =  await sendRequest(`${BASE_URL}/zipcode/${zipCode}`)  
  return res;
}

export async function getWeatherForCity(id) {
  console.log(`getWeatherForCity - id=${id}`)
  const res =  await sendRequest(`${BASE_URL}/${id}`)  
  console.log(`getWeatherForCity - res=${res}`)
}