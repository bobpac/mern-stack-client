import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../../utilities/user-services'
import AuthPage from '../Auth/AuthPage/AuthPage'
import NavBar from '../NavBar/NavBar'
import AddCity from '../Settings/Settings'
import ShowCity from '../Weather/Weather'

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main>
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/cities/new'    
                   element={<AddCity  user={user}/>} />
            <Route path='/cities'        
                   element={<ShowCity user={user}/>} />
            <Route path='*'
                   element={<Navigate to="/cities" replace />} /> 
          </Routes>
        </> :
        <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App
