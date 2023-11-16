import { useState } from 'react'
import * as usersService from '../../../../utilities/user-services'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      const user = await usersService.login(credentials)
      setUser(user)
    } catch {
      setError('Log In Failed - Try Again')
    }
  }

  return (
    <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label className="loginForm">Email</label>
          <input className="loginForm" type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label className="loginForm">Password</label>
          <input className="loginForm" type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  )
}