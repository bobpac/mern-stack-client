import M from 'materialize-css';
import { Link } from 'react-router-dom'
import * as userService from '../../../utilities/user-services'
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <nav>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Welcome, {user.name}
      {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Link to='/'>Main Page</Link> */}
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Link to='/cities/new'>Add City</Link>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Link to='/cities/delete'>Delete City</Link>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Link to='/cities'>Show Cities</Link>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Link to='/' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}