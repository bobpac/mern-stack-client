import { getToken } from './user-services'

export default async function sendRequest(url, method = 'GET', payload = null) {

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
    console.log(`sendRequest: url=${url}`)
    const res = await fetch(url, options)
    console.log(`sendRequest: res=${res}`)
    if (res.ok) return res.json()
    throw new Error('Bad Request')
}