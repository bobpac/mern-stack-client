import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../../utilities/user-services'
import AuthPage from '../Auth/AuthPage/AuthPage'
import NavBar from '../NavBar/NavBar'
import Settings from '../Settings/Settings'
import Forecast from '../Forecast/Forecast'

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main>
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/cities/settings'    
                   element={<Settings user={user}/>} />
            <Route path='/cities/forecast'        
                   element={<Forecast user={user}/>} />
            <Route path='*'
                   element={<Navigate to="/cities/forecast" replace />} /> 
          </Routes>
        </> :
        <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App
