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
        <a href="" className="brand-logo center">
          <img id="openWeatherLogoNavbar" width="100" height="45"
              src="../../../images/logo_white_cropped.png">
          </img>
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/cities/settings">Settings</Link>
          </li>
          <li>
            <Link to="/cities/forecast">Forecast</Link>
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
