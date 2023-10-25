import sendRequest from './send-request'
const BASE_URL = 'http://localhost:4741/cities'

export async function addCity(cityData) {
    return sendRequest(BASE_URL, 'POST', cityData)
}

export async function delCity(cityData) {
  return sendRequest(`${BASE_URL}/:id`, 'DELETE', cityData)
}

export async function getCities() {
    return sendRequest(BASE_URL)
}
