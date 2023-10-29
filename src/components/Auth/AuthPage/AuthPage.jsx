import { useState } from 'react'
import SignUpForm from '../SignUpForm/SignUpForm'
import LoginForm from '../LoginForm/LoginForm'
import "./AuthPage.css"

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false)
  return (
    <main>
      <div className="authPage">
      <img id="openWeatherLogo" src="../../../images/logo_white_cropped.png"></img>
      <button id="loginSignupButton" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log in' : 'Sign Up'}</button>
      {showSignUp ?
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />
      }
      </div>
    </main>
  );
}