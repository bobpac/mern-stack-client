import sendRequest from './send-request'
const BASE_URL = 'http://localhost:4741/cities'

export async function addCity(cityData) {
    return sendRequest(BASE_URL, 'POST', cityData)
}

export async function delCity(cityId) {
  return sendRequest(`${BASE_URL}/${cityId}`, 'DELETE')
}

export async function getCities(user) {
    return sendRequest(`${BASE_URL}/${user._id}`)
}
