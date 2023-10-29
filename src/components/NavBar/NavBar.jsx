import M from "materialize-css";
import { Link } from "react-router-dom";
import * as userService from "../../../utilities/user-services";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className=" blue darken-1">
      <div className="nav-wrapper">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Welcome, {user.name}
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/cities/new">Add City</Link>
          </li>
          <li>
            <Link to="/cities/delete">Delete City</Link>
          </li>
          <li>
            <Link to="/cities">Show Cities</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogOut}>
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
