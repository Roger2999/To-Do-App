import { NavLink } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <>
      <ul className="nav nav-underline">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link nav-add">
            Gestionar usuarios
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default NavBar;
