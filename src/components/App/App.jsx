import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../../utilities/user-services'
import * as citiesAPI from '../../../utilities/city-api'
import AuthPage from '../Auth/AuthPage/AuthPage'
import NavBar from '../NavBar/NavBar'
import MainPage from '../MainPage/MainPage'

function App() {
  const [user, setUser] = useState(getUser())
  const [cities, setCities] = useState([])
  useEffect(function(){
    async function getCities() {
      const cities = await citiesAPI.getCities();
      setCities(cities);
    }
    getCities();
  },[]);

  return (
    <main>
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/cities' 
          </Routes>
        </> :
        <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App
