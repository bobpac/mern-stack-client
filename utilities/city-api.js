import sendRequest from './send-request'

const BASE_URL = 'https://weather-server-e4ww.onrender.com/cities'
// const BASE_URL = 'http://localhost:4741/cities'

export async function addCity(cityData) {
  const res = await sendRequest(BASE_URL, 'POST', cityData)
  return res;
}

export async function delCity(cityId) {
  const res = await sendRequest(`${BASE_URL}/${cityId}`, 'DELETE')
  return res;
}

export async function getCities(user) {
  if (user === undefined) return;
  const res = await sendRequest(`${BASE_URL}`)
  return res;
}

export async function getCityInfoFromZipCode(zipCode) {
  const res = await sendRequest(`${BASE_URL}/zipcode/${zipCode}`)  
  return res
}

export async function getWeatherForCity(id) {
  const res = await sendRequest(`${BASE_URL}/${id}`)
  return res
}