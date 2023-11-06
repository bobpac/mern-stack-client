import { getToken } from './user-services'

export default async function sendRequestCORS(url, method = 'GET', payload = null) {

  const options = { method }
  if (payload) {
      options.headers = { 'Content-Type': 'application/json' }
      options.body = JSON.stringify(payload)
  }
  const token = getToken()
  if (token) {

      options.headers ||= {}
      options.headers.Authorization = `Bearer ${token}`
  }

  // DEBUG CODE START
  options.mode = "cors";
  options.headers ||= "Access-Control-Allow-Origin *"
  // DEBUG CODE END

  try {
      const res = await fetch(url, options)
      // if (res.ok) return res.json()
      const data = await res.json();
      if (res.ok) return data;
  } catch (error) {
      console.log(`sendRequest: error = ${error}`)
      res.status(400).json(error)
  }

  throw new Error('Bad Request')
}