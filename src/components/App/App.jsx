import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../../utilities/user-services'
import * as citiesAPI from '../../../utilities/city-api'
import AuthPage from '../Auth/AuthPage/AuthPage'
import NavBar from '../NavBar/NavBar'
import MainPage from '../MainPage/MainPage'
import AddCity from '../AddCity/AddCity'
import DelCity from '../DelCity/DelCity'
import ShowCity from '../ShowCity/ShowCity'

function App() {
  const [user, setUser] = useState(getUser())
  const [cities, setCities] = useState([])



  async function handleAddCity(city) {
    setCities([...cities, city]);
  }

  return (
    <main>
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/cities/new'    
                   element={<AddCity  handleAddCity={handleAddCity} />} />
            <Route path='/cities/delete' 
                   element={<DelCity  user={user}/>} />
            <Route path='/cities'        
                   element={<ShowCity user={user}/>} />
          </Routes>
        </> :
        <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App
