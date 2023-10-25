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
        <div className="nav-wrapper green lighten-2">
          <ul id="nav-modile" className="right hide-on-med-and-down">
            <li>
              <Link to='/'>Main Page</Link>
              <Link to='/cities'>Add City</Link>
            </li>
            <li>
              Welcome, {user.name}
            </li>
            <li>
              <Link to='/' onClick={handleLogOut}>Log Out</Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}