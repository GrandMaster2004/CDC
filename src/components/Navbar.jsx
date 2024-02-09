import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_logo">
        <ul>
          <li>Logo</li>
          <li>Logo</li>
        </ul>
      </div>
      <div className="nav_element">
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/alumni">
            <li>Alumni</li>
          </NavLink>
          <NavLink to="/ourteam">
            <li>OurTeam</li>
          </NavLink>
          <NavLink to="/ourteam">
            <li>Admin</li>
          </NavLink>
        </ul>
      </div>
      <div className="nav_login">
        <ul>
          <li>
            <button>SignUp</button>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
